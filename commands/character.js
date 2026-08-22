const { SlashCommandBuilder } = require("discord.js");
const { getCharacterProfiles } = require("../systems/characterProfileStore");
const {
    formatSavedCharacterProfile
} = require("../systems/birthConditionUI");


module.exports = {
    data:new SlashCommandBuilder()
    .setName("character")
    .setDescription("View a saved character profile")
    .addSubcommand(subcommand =>
        subcommand
        .setName("info")
        .setDescription("View saved health, personality, parent, and injury rolls")
        .addStringOption(option =>
            option
            .setName("name")
            .setDescription("Character name")
            .setRequired(true)
        )
        .addBooleanOption(option =>
            option
            .setName("ignore_others")
            .setDescription("Only show your roll for this name (default: true)")
            .setRequired(false)
        )
    ),


    async execute(interaction) {
        const name = interaction.options.getString("name");
        const ignoreOthers =
        interaction.options.getBoolean("ignore_others") ?? true;
        const records = getCharacterProfiles({
            characterName:name,
            ownerId:interaction.user.id,
            ignoreOthers
        });


        if(!records.length){
            return interaction.reply({
                content:ignoreOthers
                    ? "No saved character record exists for that name in your profiles."
                    : "No saved character record exists for that name.",
                ephemeral:true
            });
        }


        const embeds = records
        .slice(0, 10)
        .map(formatSavedCharacterProfile);

        return interaction.reply({
            content:ignoreOthers
                ? "Showing only your saved character profile."
                : "Showing saved profiles for every player with this character name.",
            embeds,
            ephemeral:true
        });
    }
};
