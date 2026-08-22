const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    ModalBuilder,
    StringSelectMenuBuilder,
    TextInputBuilder,
    TextInputStyle
} = require("discord.js");

const {
    MAX_RECESSIVE_CONDITIONS,
    generateBirthCondition
} = require("./birthConditionSystem");
const { birthConditions } = require("../data/birthConditions");
const { saveCharacterProfile } = require("./characterProfileStore");


const sessions = new Map();
const CONDITIONS_PER_PAGE = 10;


function getSession(interaction) {
    return sessions.get(interaction.user.id);
}


function getConditionCategories() {
    return [...new Set(
        birthConditions.map(condition => condition.category)
    )];
}


function conditionKey(condition) {
    return `${condition.category}:${condition.name}`;
}


function formatCondition(condition) {
    return condition
        ? `**${condition.name}** (${condition.category} • ${condition.severity})`
        : "Healthy — none selected";
}


function formatCarrierList(carriers) {
    return carriers.length
        ? carriers.map(condition =>
            `• ${condition.name} (${condition.category})`
        ).join("\n")
        : "None selected";
}


function makeParentSummary(label, parent) {
    return [
        `**${label}: ${parent.name}**`,
        `Visible dominant: ${formatCondition(parent.dominant)}`,
        `Hidden carriers (${parent.recessive.length}/${MAX_RECESSIVE_CONDITIONS}):`,
        formatCarrierList(parent.recessive)
    ].join("\n");
}


function renderKnownParentsPanel(interaction, responseMethod = "update") {
    const session = getSession(interaction);

    if(!session?.mother || !session?.father){
        return interaction.reply({
            content:"❌ Parent details are missing. Restart the generator.",
            ephemeral:true
        });
    }

    const motherRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId("kp_edit_mother_dominant")
        .setLabel("Mother: visible dominant")
        .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
        .setCustomId("kp_edit_mother_carrier")
        .setLabel("Mother: hidden carriers")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(
            session.mother.recessive.length >=
            MAX_RECESSIVE_CONDITIONS
        )
    );

    const fatherRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId("kp_edit_father_dominant")
        .setLabel("Father: visible dominant")
        .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
        .setCustomId("kp_edit_father_carrier")
        .setLabel("Father: hidden carriers")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(
            session.father.recessive.length >=
            MAX_RECESSIVE_CONDITIONS
        )
    );

    const actionRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId("kp_autofill")
        .setLabel("Auto-fill both parents")
        .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
        .setCustomId("kp_generate")
        .setLabel("Generate & save child")
        .setStyle(ButtonStyle.Success)
    );

    return interaction[responseMethod]({
        content:
        "🧬 **Known Parents — Genetics Panel**\n" +
        "Visible dominants are expressed traits. Hidden carriers are recessive traits; they can stay hidden or become dominant in the child.\n\n" +
        `${makeParentSummary("Mother", session.mother)}\n\n` +
        `${makeParentSummary("Father", session.father)}\n\n` +
        "Use **Auto-fill both parents** for a quick randomized setup, or edit the two clearly labeled trait types.",
        components:[motherRow, fatherRow, actionRow],
        ...(responseMethod === "reply" ? { ephemeral:true } : {})
    });
}


function showCategoryPicker(interaction, parentKey, traitType) {
    const parentLabel = parentKey === "mother" ? "Mother" : "Father";
    const traitLabel = traitType === "dominant"
        ? "visible dominant"
        : "hidden carrier";

    const categoryOptions = [
        ...(traitType === "dominant" ? [{
            label:"Healthy (no visible dominant)",
            value:"healthy",
            description:"This parent has no expressed condition"
        }] : []),
        ...getConditionCategories().map(category => ({
            label:category,
            value:category
        }))
    ];

    const menu = new StringSelectMenuBuilder()
    .setCustomId(`kp_category_${parentKey}_${traitType}`)
    .setPlaceholder("Choose Healthy or a condition category")
    .addOptions(categoryOptions);

    return interaction.update({
        content:
        `🧬 **${parentLabel}: ${traitLabel} traits**\n\n` +
        (traitType === "dominant"
            ? "Choose Healthy or a category for this parent's visible, expressed condition."
            : `Choose a category, then add up to ${MAX_RECESSIVE_CONDITIONS} hidden carrier conditions.`),
        components:[
            new ActionRowBuilder().addComponents(menu),
            new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                .setCustomId("kp_back_panel")
                .setLabel("Back to genetics panel")
                .setStyle(ButtonStyle.Secondary),
                ...(traitType === "carrier" ? [
                    new ButtonBuilder()
                    .setCustomId(`kp_clear_${parentKey}_carrier`)
                    .setLabel("Clear hidden carriers")
                    .setStyle(ButtonStyle.Danger)
                ] : [])
            )
        ]
    });
}


function showConditionPicker(
    interaction,
    parentKey,
    traitType,
    category,
    page = 0
) {
    const session = getSession(interaction);
    const parent = session?.[parentKey];

    if(!parent){
        return interaction.reply({
            content:"❌ Parent details are missing. Restart the generator.",
            ephemeral:true
        });
    }

    const selectedKeys = new Set(
        parent.recessive.map(conditionKey)
    );
    const matching = birthConditions.filter(condition =>
        condition.category === category &&
        (traitType === "dominant" ||
            !selectedKeys.has(conditionKey(condition)))
    );
    const totalPages = Math.max(
        1,
        Math.ceil(matching.length / CONDITIONS_PER_PAGE)
    );
    const safePage = Math.min(Math.max(page, 0), totalPages - 1);
    const pageConditions = matching.slice(
        safePage * CONDITIONS_PER_PAGE,
        (safePage + 1) * CONDITIONS_PER_PAGE
    );

    if(!pageConditions.length && traitType === "carrier"){
        return showCategoryPicker(interaction, parentKey, traitType);
    }

    const options = [
        ...(traitType === "dominant" ? [{
            label:"Healthy (no visible dominant)",
            value:"healthy",
            description:"Clear this parent's expressed condition"
        }] : []),
        ...pageConditions.map(condition => ({
            label:condition.name,
            value:`condition:${birthConditions.indexOf(condition)}`,
            description:`${condition.severity} • ${condition.rarity}`
        }))
    ];

    const menu = new StringSelectMenuBuilder()
    .setCustomId(
        `kp_pick_${parentKey}_${traitType}_${category}_${safePage}`
    )
    .setPlaceholder(
        traitType === "dominant"
            ? "Choose the visible dominant"
            : "Choose hidden carriers"
    )
    .addOptions(options);

    if(traitType === "carrier"){
        menu
        .setMinValues(1)
        .setMaxValues(Math.min(
            MAX_RECESSIVE_CONDITIONS - parent.recessive.length,
            pageConditions.length
        ));
    }

    const navigation = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId(
            `kp_prev_${parentKey}_${traitType}_${category}_${safePage}`
        )
        .setLabel("◀ Previous")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(safePage === 0),
        new ButtonBuilder()
        .setCustomId(
            `kp_next_${parentKey}_${traitType}_${category}_${safePage}`
        )
        .setLabel("Next ▶")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(safePage >= totalPages - 1),
        new ButtonBuilder()
        .setCustomId("kp_back_panel")
        .setLabel("Back to panel")
        .setStyle(ButtonStyle.Secondary)
    );

    return interaction.update({
        content:
        `🧬 **${parentKey === "mother" ? "Mother" : "Father"}: ` +
        `${traitType === "dominant" ? "visible dominant" : "hidden carriers"}**\n` +
        `Category: **${category}** • Page ${safePage + 1}/${totalPages}\n\n` +
        (traitType === "carrier"
            ? `Selected: ${parent.recessive.length}/${MAX_RECESSIVE_CONDITIONS}`
            : "Only this field controls the parent's visible dominant condition."),
        components:[
            new ActionRowBuilder().addComponents(menu),
            navigation
        ]
    });
}


function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}


function autoFillParent(name) {
    const recessive = [];
    const count = Math.random() < 0.55
        ? 0
        : Math.random() < 0.8 ? 1 : 2;

    while(recessive.length < count){
        const condition = randomItem(birthConditions);

        if(!recessive.some(existing =>
            conditionKey(existing) === conditionKey(condition)
        )){
            recessive.push(condition);
        }
    }

    return {
        name,
        dominant:Math.random() < 0.35
            ? randomItem(birthConditions)
            : null,
        recessive
    };
}


function serializeParents(session) {
    if(!session.parentsKnown){
        return null;
    }

    return {
        mother:session.mother,
        father:session.father
    };
}


async function generateAndSave(interaction, session) {
    await interaction.update({
        content:"🌱 Generating and saving birth condition profile...",
        components:[]
    });

    const result = generateBirthCondition({
        characterName:session.characterName,
        albino:session.albino,
        parentsKnown:session.parentsKnown,
        mother:session.mother,
        father:session.father
    });

    saveCharacterProfile({
        ownerId:interaction.user.id,
        ownerName:interaction.user.username,
        characterName:session.characterName,
        birthResult:result,
        parents:serializeParents(session)
    });

    sessions.delete(interaction.user.id);

    return interaction.followUp({
        content:"✅ Saved privately to your character profile. Use `/character info` to view it later.",
        embeds:[formatBirthResult(result)],
        ephemeral:false
    });
}


function startBirth(interaction) {
    return interaction.reply({
        content:"🌱 **Birth Condition Generator**\n\nStart a new character roll.",
        components:[
            new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                .setCustomId("birth_start")
                .setLabel("Enter character details")
                .setStyle(ButtonStyle.Primary)
            )
        ],
        ephemeral:true
    });
}


async function handleButton(interaction) {
    const { customId } = interaction;

    if(customId === "birth_start"){
        const modal = new ModalBuilder()
        .setCustomId("birth_character_modal")
        .setTitle("Character details")
        .addComponents(
            new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                .setCustomId("character_name")
                .setLabel("Character name")
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
            )
        );

        return interaction.showModal(modal);
    }

    if(customId === "albino_yes" || customId === "albino_no"){
        const session = getSession(interaction);
        if(!session) return missingSession(interaction);

        session.albino = customId === "albino_yes";

        return interaction.update({
            content:
            `🧬 **${session.characterName}**\n\n` +
            "Are the parents known? Known parents open one editable genetics panel; unknown parents use a random genetic background.",
            components:[
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                    .setCustomId("parents_known")
                    .setLabel("Known parents")
                    .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                    .setCustomId("parents_unknown")
                    .setLabel("Unknown parents")
                    .setStyle(ButtonStyle.Secondary)
                )
            ]
        });
    }

    if(customId === "parents_known"){
        const modal = new ModalBuilder()
        .setCustomId("known_parents_modal")
        .setTitle("Known parents")
        .addComponents(
            new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                .setCustomId("mother_name")
                .setLabel("Mother character name")
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
            ),
            new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                .setCustomId("father_name")
                .setLabel("Father character name")
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
            )
        );

        return interaction.showModal(modal);
    }

    if(customId === "parents_unknown"){
        const session = getSession(interaction);
        if(!session) return missingSession(interaction);

        session.parentsKnown = false;
        return generateAndSave(interaction, session);
    }

    if(customId === "kp_back_panel"){
        return renderKnownParentsPanel(interaction);
    }

    if(customId.startsWith("kp_clear_")){
        const [, , parentKey, traitType] = customId.split("_");
        const session = getSession(interaction);

        if(!session?.[parentKey] || traitType !== "carrier"){
            return missingSession(interaction);
        }

        session[parentKey].recessive = [];
        return renderKnownParentsPanel(interaction);
    }

    if(customId === "kp_autofill"){
        const session = getSession(interaction);
        if(!session) return missingSession(interaction);

        session.mother = autoFillParent(session.mother.name);
        session.father = autoFillParent(session.father.name);
        return renderKnownParentsPanel(interaction);
    }

    if(customId === "kp_generate"){
        const session = getSession(interaction);
        if(!session) return missingSession(interaction);

        return generateAndSave(interaction, session);
    }

    if(customId.startsWith("kp_edit_")){
        const [, , parentKey, traitType] = customId.split("_");
        return showCategoryPicker(interaction, parentKey, traitType);
    }

    if(
        customId.startsWith("kp_prev_") ||
        customId.startsWith("kp_next_")
    ){
        const [, direction, parentKey, traitType, category, page] =
        customId.split("_");
        const nextPage = Number(page) +
            (direction === "next" ? 1 : -1);

        return showConditionPicker(
            interaction,
            parentKey,
            traitType,
            category,
            nextPage
        );
    }
}


async function handleSelectMenu(interaction) {
    const { customId } = interaction;

    if(customId.startsWith("kp_category_")){
        const [, , parentKey, traitType] = customId.split("_");
        const category = interaction.values[0];

        if(traitType === "dominant" && category === "healthy"){
            const session = getSession(interaction);
            if(!session) return missingSession(interaction);

            session[parentKey].dominant = null;
            return showKnownParentsPanel(interaction);
        }

        return showConditionPicker(
            interaction,
            parentKey,
            traitType,
            category
        );
    }

    if(customId.startsWith("kp_pick_")){
        const [, , parentKey, traitType] = customId.split("_");
        const session = getSession(interaction);
        const parent = session?.[parentKey];

        if(!parent) return missingSession(interaction);

        if(traitType === "dominant"){
            parent.dominant = interaction.values[0] === "healthy"
                ? null
                : birthConditions[
                    Number(interaction.values[0].split(":")[1])
                ];
        }
        else {
            const selectedKeys = new Set(
                parent.recessive.map(conditionKey)
            );

            for(const value of interaction.values){
                const condition = birthConditions[
                    Number(value.split(":")[1])
                ];

                if(
                    condition &&
                    !selectedKeys.has(conditionKey(condition)) &&
                    parent.recessive.length < MAX_RECESSIVE_CONDITIONS
                ){
                    parent.recessive.push(condition);
                    selectedKeys.add(conditionKey(condition));
                }
            }
        }

        return renderKnownParentsPanel(interaction);
    }
}


async function handleModal(interaction) {
    if(interaction.customId === "birth_character_modal"){
        const characterName = interaction.fields
        .getTextInputValue("character_name")
        .trim();

        sessions.set(interaction.user.id, {
            characterName,
            albino:false,
            parentsKnown:false,
            mother:null,
            father:null
        });

        return interaction.reply({
            content:
            `🪺 **${characterName}**\n\nWas this character born albino?\n` +
            "Albino characters have an 85% chance to roll three distinct dominant conditions.",
            components:[
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                    .setCustomId("albino_yes")
                    .setLabel("Yes — albino")
                    .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                    .setCustomId("albino_no")
                    .setLabel("No")
                    .setStyle(ButtonStyle.Secondary)
                )
            ],
            ephemeral:true
        });
    }

    if(interaction.customId === "known_parents_modal"){
        const session = getSession(interaction);
        if(!session) return missingSession(interaction);

        session.parentsKnown = true;
        session.mother = {
            name:interaction.fields.getTextInputValue("mother_name").trim(),
            dominant:null,
            recessive:[]
        };
        session.father = {
            name:interaction.fields.getTextInputValue("father_name").trim(),
            dominant:null,
            recessive:[]
        };

        return renderKnownParentsPanel(interaction, "reply");
    }
}


function missingSession(interaction) {
    return interaction.reply({
        content:"❌ Your birth-condition session expired. Please run `/birthcondition` again.",
        ephemeral:true
    });
}


async function handleInteraction(interaction) {
    if(interaction.isButton()){
        return handleButton(interaction);
    }

    if(interaction.isStringSelectMenu()){
        return handleSelectMenu(interaction);
    }

    if(interaction.isModalSubmit()){
        return handleModal(interaction);
    }
}


function addChunkedField(embed, name, entries) {
    let current = "";
    let part = 1;

    for(const entry of entries){
        if(current && current.length + entry.length + 1 > 1024){
            embed.addFields({
                name:part === 1 ? name : `${name} (continued)`,
                value:current
            });
            current = "";
            part++;
        }

        current += `${current ? "\n" : ""}${entry}`;
    }

    if(current){
        embed.addFields({
            name:part === 1 ? name : `${name} (continued)`,
            value:current
        });
    }
}


function formatBirthResult(result) {
    const embed = new EmbedBuilder()
    .setTitle("🌱 Birth Condition Profile")
    .setColor(0x88b04b)
    .addFields(
        {
            name:"🦖 Character Name",
            value:result.characterName || "Unknown",
            inline:true
        },
        {
            name:"✨ Albino",
            value:result.albino ? "Yes" : "No",
            inline:true
        },
        {
            name:"🧬 Source",
            value:result.source || "Unknown",
            inline:false
        }
    );

    const dominants = result.dominantConditions?.length
        ? result.dominantConditions
        : result.dominantCondition
            ? [{ condition:result.dominantCondition, source:"Inherited" }]
            : [];

    if(dominants.length){
        addChunkedField(
            embed,
            `⚠️ Dominant Health Conditions (${dominants.length})`,
            dominants.map(({ condition, source, variation }) =>
                `**${condition.name}**\n` +
                `Category: ${condition.category}\n` +
                `Severity: ${condition.severity}\n` +
                `Rarity: ${condition.rarity}\n` +
                `Source: ${source}\n` +
                `${variation ? `${variation}\n` : ""}` +
                `Effect: ${condition.description}`
            )
        );
    }
    else {
        embed.addFields({
            name:"🌿 Dominant Health Conditions",
            value:"Healthy — no visible dominant conditions."
        });
    }

    if(result.recessiveConditions?.length){
        addChunkedField(
            embed,
            `🧬 Hidden Recessive Health Conditions (${result.recessiveConditions.length})`,
            result.recessiveConditions.map(({ condition, source }) =>
                `**${condition.name}**\n` +
                `Category: ${condition.category}\n` +
                `Severity: ${condition.severity}\n` +
                `Source: ${source}\n` +
                `Effect: ${condition.description}`
            )
        );
    }
    else {
        embed.addFields({
            name:"🧬 Hidden Recessive Health Conditions",
            value:"None detected."
        });
    }

    return embed.setFooter({
        text:"Birth Condition Generator"
    });
}


function formatSavedCharacterProfile(record) {
    const embed = record.birthResult
    ? formatBirthResult(record.birthResult)
    : new EmbedBuilder()
    .setColor(0x88b04b)
    .addFields({
        name:"Health Conditions",
        value:"No birth-condition roll has been saved yet."
    });

    embed
    .setTitle(`🌱 Saved Character: ${record.characterName}`)
    .setAuthor({ name:`Rolled by ${record.ownerName}` })
    .setFooter({
        text:`Saved ${new Date(record.updatedAt).toLocaleString()}`
    });

    if(record.parents?.mother && record.parents?.father){
        embed.addFields({
            name:"🧬 Parents and genetics used",
            value:
            `**Mother: ${record.parents.mother.name}**\n` +
            `Visible dominant: ${formatCondition(record.parents.mother.dominant)}\n` +
            `Hidden carriers: ${record.parents.mother.recessive.length ? record.parents.mother.recessive.map(condition => condition.name).join(", ") : "None"}\n\n` +
            `**Father: ${record.parents.father.name}**\n` +
            `Visible dominant: ${formatCondition(record.parents.father.dominant)}\n` +
            `Hidden carriers: ${record.parents.father.recessive.length ? record.parents.father.recessive.map(condition => condition.name).join(", ") : "None"}`
        });
    }

    if(record.personality?.traits?.length){
        addChunkedField(
            embed,
            "🍵 Personality Traits",
            record.personality.traits.map(trait =>
                `**${trait.name}**${
                    trait.description
                    ? ` — ${trait.description}`
                    : ""
                }`
            )
        );
    }
    else {
        embed.addFields({
            name:"🍵 Personality Traits",
            value:"No personality roll has been saved yet."
        });
    }

    if(record.personality?.synergies?.length){
        addChunkedField(
            embed,
            "🧬 Personality Synergies",
            record.personality.synergies.map(synergy =>
                `**${synergy.name}**${
                    synergy.description
                    ? ` — ${synergy.description}`
                    : ""
                }`
            )
        );
    }

    if(record.injuries?.length){
        addChunkedField(
            embed,
            `🩹 Recent Injury Rolls (${record.injuries.length})`,
            record.injuries.slice(-3).map(injury =>
                `**${injury.injury.name}** — ${injury.injury.severity}\n` +
                `Age: ${injury.age}; wound: ${injury.woundSeverity}; ` +
                `duration: ${injury.injury.duration}`
            )
        );
    }

    return embed;
}


module.exports = {
    startBirth,
    handleInteraction,
    formatBirthResult,
    formatSavedCharacterProfile
};
