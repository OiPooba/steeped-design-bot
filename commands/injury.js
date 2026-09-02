const { SlashCommandBuilder } = require("discord.js");
const {
    getCharacterProfiles,
    saveCharacterProfile,
    saveCharacterInjury
} = require("../systems/characterProfileStore");
const { birthConditions } = require("../data/birthConditions");
const {
    rollInjury,
    formatInjuryResult
} = require("../systems/injurySystem");


function parseConditions(value, maximum, label) {
    const names = `${value || ""}`
    .split(",")
    .map(name => name.trim())
    .filter(name => name &&
        !["healthy", "none"].includes(name.toLowerCase())
    );
    const conditions = [];
    const unknown = [];

    for(const name of names){
        const condition = birthConditions.find(candidate =>
            candidate.name.toLowerCase() === name.toLowerCase()
        );

        if(!condition){
            unknown.push(name);
            continue;
        }

        if(!conditions.some(existing =>
            existing.name === condition.name &&
            existing.category === condition.category
        )){
            conditions.push(condition);
        }
    }

    if(unknown.length){
        throw new Error(
            `Unknown ${label} condition(s): ${unknown.join(", ")}.`
        );
    }

    if(conditions.length > maximum){
        throw new Error(
            `Enter no more than ${maximum} ${label} condition(s).`
        );
    }

    return conditions;
}


function createManualBirthResult({
    characterName,
    dominantInput,
    recessiveInput,
    albino
}) {
    const dominants = parseConditions(
        dominantInput,
        3,
        "dominant"
    );
    const recessives = parseConditions(
        recessiveInput,
        6,
        "recessive"
    );

    return {
        characterName,
        albino,
        source:"Manually entered for injury roller",
        dominantCondition:dominants[0] || null,
        dominantConditions:dominants.map(condition => ({
            condition,
            source:"Manually entered"
        })),
        recessiveConditions:recessives.map(condition => ({
            condition,
            source:"Manually entered"
        }))
    };
}


module.exports = {
    data:new SlashCommandBuilder()
    .setName("injury")
    .setDescription("Roll an injury using a saved character's health")
    .addSubcommand(subcommand =>
        subcommand
        .setName("roll")
        .setDescription("Roll a health-aware injury outcome")
        .addStringOption(option =>
            option
            .setName("name")
            .setDescription("Your saved character name")
            .setRequired(true)
        )
        .addStringOption(option =>
            option
            .setName("age")
            .setDescription("Character age")
            .setRequired(true)
            .addChoices(
                { name:"Young", value:"young" },
                { name:"Adult", value:"adult" },
                { name:"Elder", value:"elder" }
            )
        )
        .addStringOption(option =>
            option
            .setName("wound_severity")
            .setDescription("How serious the original wound or encounter was")
            .setRequired(true)
            .addChoices(
                { name:"Minor", value:"minor" },
                { name:"Moderate", value:"moderate" },
                { name:"Severe", value:"severe" }
            )
        )
        .addStringOption(option =>
            option
            .setName("dominant_conditions")
            .setDescription("If unsaved: comma-separated visible conditions, or Healthy")
            .setRequired(false)
        )
        .addStringOption(option =>
            option
            .setName("recessive_conditions")
            .setDescription("If unsaved: comma-separated hidden conditions, or None")
            .setRequired(false)
        )
        .addBooleanOption(option =>
            option
            .setName("albino")
            .setDescription("If unsaved: was the character born albino?")
            .setRequired(false)
        )
    ),


    async execute(interaction) {
        const characterName = interaction.options.getString("name");
        let record = getCharacterProfiles({
            characterName,
            ownerId:interaction.user.id,
            ignoreOthers:true
        })[0];

        let usedManualConditions = false;

        if(!record?.birthResult){
            try {
                record = saveCharacterProfile({
                    ownerId:interaction.user.id,
                    ownerName:interaction.user.username,
                    characterName,
                    birthResult:createManualBirthResult({
                        characterName,
                        dominantInput:interaction.options.getString(
                            "dominant_conditions"
                        ),
                        recessiveInput:interaction.options.getString(
                            "recessive_conditions"
                        ),
                        albino:interaction.options.getBoolean(
                            "albino"
                        ) ?? false
                    }),
                    parents:null
                });
                usedManualConditions = true;
            }
            catch(error) {
                return interaction.reply({
                    content:`❌ ${error.message}`,
                    ephemeral:true
                });
            }
        }

        const result = rollInjury({
            record,
            characterName:record.characterName,
            age:interaction.options.getString("age"),
            woundSeverity:interaction.options.getString("wound_severity")
        });

        saveCharacterInjury({
            ownerId:interaction.user.id,
            ownerName:interaction.user.username,
            characterName:record.characterName,
            injury:result
        });

        return interaction.reply({
            ...(usedManualConditions ? {
                content:"✅ Your manually entered health profile was saved for future rolls."
            } : {}),
            embeds:[formatInjuryResult(result)]
        });
    }
};
