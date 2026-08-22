const { EmbedBuilder } = require("discord.js");
const {
    complicationOutcomes,
    mildRecoveryOutcomes
} = require("../data/injuries");


const ageModifiers = {
    young:5,
    adult:0,
    elder:10
};

const woundModifiers = {
    minor:0,
    moderate:12,
    severe:28
};

const severityScores = {
    mild:1,
    moderate:2,
    severe:3,
    extreme:4,
    lasting:4
};

const FATAL_INJURY_CHANCE = 0.005;
const ALBINO_INJURY_MODIFIER = 8;


function random(items) {
    return items[Math.floor(Math.random() * items.length)];
}


function rollPercent() {
    return Math.floor(Math.random() * 100) + 1;
}


function getConditions(result, type) {
    if(!result) return [];

    if(type === "dominant"){
        if(result.dominantConditions?.length){
            return result.dominantConditions
            .map(entry => entry.condition || entry)
            .filter(Boolean);
        }

        return result.dominantCondition
            ? [result.dominantCondition]
            : [];
    }

    return (result.recessiveConditions || [])
    .map(entry => entry.condition || entry)
    .filter(Boolean);
}


function getConditionBurden(record) {
    const result = record?.birthResult;
    const dominantBurden = getConditions(result, "dominant")
    .reduce((total, condition) =>
        total + (
            severityScores[
                `${condition.severity || ""}`.toLowerCase()
            ] || 1
        ) * 3,
        0
    );
    const carrierBurden = getConditions(result, "recessive")
    .reduce((total, condition) =>
        total + (
            severityScores[
                `${condition.severity || ""}`.toLowerCase()
            ] || 1
        ),
        0
    );

    return dominantBurden + carrierBurden +
        (result?.albino ? ALBINO_INJURY_MODIFIER : 0);
}


function calculateComplicationChance({ record, age, woundSeverity }) {
    const chance = 8 +
        (ageModifiers[age] || 0) +
        (woundModifiers[woundSeverity] || 0) +
        getConditionBurden(record);

    return Math.max(5, Math.min(75, chance));
}


function weightedPick(outcomes, getWeight) {
    const totalWeight = outcomes.reduce(
        (total, outcome) => total + getWeight(outcome),
        0
    );
    let roll = Math.random() * totalWeight;

    for(const outcome of outcomes){
        roll -= getWeight(outcome);

        if(roll < 0){
            return outcome;
        }
    }

    return outcomes[outcomes.length - 1];
}


function selectComplication({ record, age, woundSeverity }) {
    const pressure =
        Math.floor(getConditionBurden(record) / 5) +
        (age === "elder" ? 2 : age === "young" ? 1 : 0) +
        ({ minor:0, moderate:1, severe:3 }[woundSeverity] || 0);

    return weightedPick(
        complicationOutcomes,
        outcome => {
            const baseWeight = {
                1:16,
                3:4,
                4:1
            }[outcome.riskTier] || 1;

            return baseWeight +
                (outcome.riskTier - 1) * pressure;
        }
    );
}


function rollInjury({ record, characterName, age, woundSeverity }) {
    const complicationChance = calculateComplicationChance({
        record,
        age,
        woundSeverity
    });
    const fatal = Math.random() < FATAL_INJURY_CHANCE;
    const complication = !fatal &&
        rollPercent() <= complicationChance;
    const injury = fatal
        ? {
            name:"Fatal Injury",
            severity:"Fatal",
            duration:"Permanent",
            description:"The injury proves fatal."
        }
        : complication
            ? selectComplication({ record, age, woundSeverity })
            : {
                name:"Mild Recovery",
                severity:"Mild",
                duration:"Brief recovery with rest",
                description:random(mildRecoveryOutcomes)
            };

    return {
        characterName,
        age,
        woundSeverity,
        fatalChance:FATAL_INJURY_CHANCE * 100,
        complicationChance,
        healthBurden:getConditionBurden(record),
        injury,
        rolledAt:new Date().toISOString()
    };
}


function formatInjuryResult(result) {
    return new EmbedBuilder()
    .setTitle(`🩹 Injury Roll: ${result.characterName}`)
    .setColor(
        result.injury.severity === "Mild"
            ? 0x88b04b
            : result.injury.severity === "Lasting" ||
                result.injury.severity === "Fatal"
                ? 0x8b0000
                : 0xe09f3e
    )
    .addFields(
        {
            name:"Wound context",
            value:
            `Age: **${result.age}**\n` +
            `Wound severity: **${result.woundSeverity}**`,
            inline:true
        },
        {
            name:"Health influence",
            value:
            `Health burden: **${result.healthBurden}**\n` +
            `Complication chance: **${result.complicationChance}%**`,
            inline:true
        },
        {
            name:`${result.injury.severity}: ${result.injury.name}`,
            value:
            `${result.injury.description}\n\n` +
            `**Expected duration:** ${result.injury.duration}`
        }
    )
    .setFooter({
        text:"Roleplay injury roller — not medical advice"
    });
}


module.exports = {
    calculateComplicationChance,
    getConditionBurden,
    rollInjury,
    formatInjuryResult
};
