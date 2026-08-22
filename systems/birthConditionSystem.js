const { birthConditions } = require("../data/birthConditions");

const HEALTHY_BASE_CHANCE = 85;
const RECESSIVE_HEALTH_MODIFIER = -3;
const MAX_RECESSIVE_CONDITIONS = 6;
const MAX_STANDARD_DOMINANT_CONDITIONS = 1;
const MAX_ALBINO_DOMINANT_CONDITIONS = 3;
const RANDOM_RECESSIVE_CHANCES = [25, 8];
const ALBINO_THREE_DOMINANT_CHANCE = 85;
const SEVERITY_VARIATION_CHANCE = 35;

const healthModifiers = {
    Mild: -10,
    Moderate: -20,
    Severe: -35,
    Extreme: -50
};

const severityRank = {
    Mild: 1,
    Moderate: 2,
    Severe: 3,
    Extreme: 4
};

const severityWeights = {
    Mild: 70,
    Moderate: 20,
    Severe: 8,
    Extreme: 2
};

function random(items) {
    return items?.length
        ? items[Math.floor(Math.random() * items.length)]
        : null;
}

function rollPercent() {
    return Math.floor(Math.random() * 100) + 1;
}

function normalizeSeverity(severity) {
    return {
        mild: "Mild",
        moderate: "Moderate",
        severe: "Severe",
        extreme: "Extreme"
    }[`${severity || ""}`.toLowerCase()] || null;
}

function conditionKey(condition) {
    return `${condition.category}:${condition.name}`;
}

function findCondition(condition) {
    if(!condition) return null;

    return birthConditions.find(candidate =>
        candidate.name === condition.name &&
        (!condition.category || candidate.category === condition.category)
    ) || null;
}

function uniqueConditions(conditions) {
    const seen = new Set();

    return conditions
    .map(condition => findCondition(
        condition.condition || condition
    ))
    .filter(condition => {
        if(!condition || seen.has(conditionKey(condition))){
            return false;
        }

        seen.add(conditionKey(condition));
        return true;
    });
}

function normalizeParent(parent) {
    if(!parent){
        return { dominants:[], recessive:[] };
    }

    const suppliedDominants = parent.dominants ||
        parent.dominantConditions ||
        (parent.dominant
            ? [parent.dominant]
            : parent.dominantCondition
                ? [parent.dominantCondition]
                : []);

    const suppliedRecessives = parent.recessive ||
        parent.recessiveConditions || [];

    return {
        dominants:uniqueConditions(suppliedDominants),
        recessive:uniqueConditions(suppliedRecessives)
        .slice(0, MAX_RECESSIVE_CONDITIONS)
    };
}

function getConditionsAtSeverity(severity, excludedKeys = new Set()) {
    return birthConditions.filter(condition =>
        normalizeSeverity(condition.severity) === severity &&
        !excludedKeys.has(conditionKey(condition))
    );
}

function rollSeverity() {
    const roll = rollPercent();
    let runningTotal = 0;

    for(const [severity, weight] of Object.entries(severityWeights)){
        runningTotal += weight;

        if(roll <= runningTotal){
            return severity;
        }
    }

    return "Mild";
}

function generateRandomCondition(excludedKeys = new Set()) {
    const matchingSeverity = getConditionsAtSeverity(
        rollSeverity(),
        excludedKeys
    );

    return random(
        matchingSeverity.length
        ? matchingSeverity
        : birthConditions.filter(condition =>
            !excludedKeys.has(conditionKey(condition))
        )
    );
}

function getSeverityVariant(condition, direction, excludedKeys) {
    const currentRank = severityRank[
        normalizeSeverity(condition.severity)
    ];

    const targetSeverity = Object.entries(severityRank)
    .find(([, rank]) => rank === currentRank + direction)?.[0];

    if(!targetSeverity){
        return null;
    }

    return random(
        birthConditions.filter(candidate =>
            candidate.category === condition.category &&
            normalizeSeverity(candidate.severity) === targetSeverity &&
            !excludedKeys.has(conditionKey(candidate))
        )
    );
}

function varyConditionSeverity(condition, excludedKeys = new Set()) {
    if(
        !severityRank[normalizeSeverity(condition.severity)] ||
        rollPercent() > SEVERITY_VARIATION_CHANCE
    ){
        return { condition, variation:null };
    }

    const preferredDirection = rollPercent() <= 50 ? 1 : -1;
    const variant = getSeverityVariant(
        condition,
        preferredDirection,
        excludedKeys
    ) || getSeverityVariant(
        condition,
        preferredDirection * -1,
        excludedKeys
    );

    if(!variant){
        return { condition, variation:null };
    }

    const direction = severityRank[normalizeSeverity(variant.severity)] >
        severityRank[normalizeSeverity(condition.severity)]
        ? "increased"
        : "decreased";

    return {
        condition:variant,
        variation:`Severity ${direction} from ${condition.name}.`
    };
}

function getAllGenes(parent) {
    return parent.dominants.concat(parent.recessive);
}

function conditionOccurrences(mother, father) {
    mother = normalizeParent(mother);
    father = normalizeParent(father);

    const genes = new Map();

    for(const [parentName, parent] of [
        ["mother", mother],
        ["father", father]
    ]){
        for(const [kind, conditions] of [
            ["Dominant", parent.dominants],
            ["Carrier", parent.recessive]
        ]){
            for(const condition of conditions){
                const key = conditionKey(condition);
                const occurrence = genes.get(key) || {
                    condition,
                    motherDominant:false,
                    fatherDominant:false,
                    motherCarrier:false,
                    fatherCarrier:false
                };

                occurrence[`${parentName}${kind}`] = true;
                genes.set(key, occurrence);
            }
        }
    }

    return [...genes.values()];
}

function rollRecessiveExpression(mother, father, excludedKeys) {
    const candidates = conditionOccurrences(mother, father)
    .filter(occurrence =>
        !excludedKeys.has(conditionKey(occurrence.condition)) &&
        (occurrence.motherCarrier || occurrence.fatherCarrier)
    )
    .filter(occurrence => rollPercent() <= (
        occurrence.motherCarrier && occurrence.fatherCarrier
        ? 70
        : 20
    ));

    const selected = random(candidates);
    if(!selected) return null;

    return {
        ...varyConditionSeverity(selected.condition, excludedKeys),
        source:selected.motherCarrier && selected.fatherCarrier
            ? "Recessive expression (both parents carry)"
            : "Recessive expression (one parent carries)"
    };
}

function rollRelatedCondition(mother, father, excludedKeys) {
    const sourceCondition = random(
        getAllGenes(mother).concat(getAllGenes(father))
    );

    if(!sourceCondition) return null;

    const related = random(
        birthConditions.filter(condition =>
            condition.inheritanceGroup === sourceCondition.inheritanceGroup &&
            conditionKey(condition) !== conditionKey(sourceCondition) &&
            !excludedKeys.has(conditionKey(condition))
        )
    );

    if(!related) return null;

    return {
        ...varyConditionSeverity(related, excludedKeys),
        source:"Related genetic variation"
    };
}

function rollParentDominant(mother, father, excludedKeys) {
    const selected = random(
        mother.dominants.concat(father.dominants)
        .filter(condition => !excludedKeys.has(conditionKey(condition)))
    );

    if(!selected) return null;

    return {
        ...varyConditionSeverity(selected, excludedKeys),
        source:"Parent dominant inheritance"
    };
}

function rollDominantCondition(mother, father, excludedKeys) {
    const expressedRecessive = rollRecessiveExpression(
        mother,
        father,
        excludedKeys
    );
    const parentDominant = rollParentDominant(
        mother,
        father,
        excludedKeys
    );
    const related = rollRelatedCondition(
        mother,
        father,
        excludedKeys
    );
    const sourceRoll = rollPercent();

    if(expressedRecessive && sourceRoll <= 45){
        return expressedRecessive;
    }

    if(parentDominant && sourceRoll <= 75){
        return parentDominant;
    }

    if(related && sourceRoll <= 90){
        return related;
    }

    const randomCondition = generateRandomCondition(excludedKeys);

    return randomCondition
        ? {
            ...varyConditionSeverity(randomCondition, excludedKeys),
            source:"Random genetic variation"
        }
        : null;
}

function findRecessiveConditions(mother, father, excludedKeys = new Set()) {
    const recessives = [];

    for(const occurrence of conditionOccurrences(mother, father)){
        if(excludedKeys.has(conditionKey(occurrence.condition))){
            continue;
        }

        let chance = 0;
        let source = "Inherited carrier";

        if(occurrence.motherDominant && occurrence.fatherDominant){
            chance = 100;
            source = "Both parents dominant";
        }
        else if(
            (occurrence.motherDominant && occurrence.fatherCarrier) ||
            (occurrence.fatherDominant && occurrence.motherCarrier)
        ){
            chance = 95;
            source = "Dominant parent and carrier";
        }
        else if(occurrence.motherCarrier && occurrence.fatherCarrier){
            chance = 85;
            source = "Both parents carry";
        }
        else if(occurrence.motherDominant || occurrence.fatherDominant){
            chance = 50;
            source = "One dominant parent";
        }
        else if(occurrence.motherCarrier || occurrence.fatherCarrier){
            chance = 35;
            source = "One carrier parent";
        }

        if(rollPercent() <= chance){
            recessives.push({ condition:occurrence.condition, source });
        }
    }

    const selectedKeys = new Set([
        ...excludedKeys,
        ...recessives.map(({ condition }) => conditionKey(condition))
    ]);

    for(const chance of RANDOM_RECESSIVE_CHANCES){
        if(recessives.length >= MAX_RECESSIVE_CONDITIONS || rollPercent() > chance){
            continue;
        }

        const condition = generateRandomCondition(selectedKeys);

        if(condition){
            selectedKeys.add(conditionKey(condition));
            recessives.push({
                condition,
                source:"Random genetic carrier variation"
            });
        }
    }

    return recessives.slice(0, MAX_RECESSIVE_CONDITIONS);
}

function calculateHealthChance(mother, father) {
    mother = normalizeParent(mother);
    father = normalizeParent(father);

    const dominantModifier = mother.dominants
    .concat(father.dominants)
    .reduce((total, condition) => total + (
        healthModifiers[normalizeSeverity(condition.severity)] || 0
    ), 0);

    const carrierModifier = mother.recessive
    .concat(father.recessive)
    .length * RECESSIVE_HEALTH_MODIFIER;

    return Math.max(
        5,
        Math.min(
            95,
            HEALTHY_BASE_CHANCE +
            dominantModifier +
            carrierModifier
        )
    );
}

function generateRandomParent() {
    const dominants = rollPercent() <= 35
        ? [generateRandomCondition()].filter(Boolean)
        : [];
    const recessive = [];

    for(const chance of [75, 40]){
        if(rollPercent() <= chance){
            const condition = generateRandomCondition(
                new Set(recessive.map(conditionKey))
            );

            if(condition){
                recessive.push(condition);
            }
        }
    }

    return { dominants, recessive };
}

function generateBirthCondition({
    characterName,
    albino = false,
    parentsKnown = false,
    mother = null,
    father = null
}) {
    const normalizedMother = parentsKnown
        ? normalizeParent(mother)
        : generateRandomParent();
    const normalizedFather = parentsKnown
        ? normalizeParent(father)
        : generateRandomParent();

    const result = {
        characterName,
        albino,
        dominantConditions:[],
        dominantCondition:null,
        recessiveConditions:[],
        source:parentsKnown
            ? "Known parent genetics"
            : "Unknown parent genetics"
    };

    const needsDominantRoll = albino || rollPercent() >
        calculateHealthChance(normalizedMother, normalizedFather);

    if(!needsDominantRoll){
        result.source += " • Healthy dominant roll";
        result.recessiveConditions = findRecessiveConditions(
            normalizedMother,
            normalizedFather
        );
        return result;
    }

    const dominantSlots = albino &&
        rollPercent() <= ALBINO_THREE_DOMINANT_CHANCE
        ? MAX_ALBINO_DOMINANT_CONDITIONS
        : MAX_STANDARD_DOMINANT_CONDITIONS;
    const selectedKeys = new Set();

    for(let index = 0; index < dominantSlots; index++){
        const inherited = rollDominantCondition(
            normalizedMother,
            normalizedFather,
            selectedKeys
        );

        if(!inherited?.condition){
            break;
        }

        selectedKeys.add(conditionKey(inherited.condition));
        result.dominantConditions.push(inherited);
    }

    result.dominantCondition = result.dominantConditions[0]?.condition || null;

    if(albino && result.dominantConditions.length === 3){
        result.source += " • Albino triple-dominant roll";
    }
    else if(albino){
        result.source += " • Albino dominant roll";
    }

    result.recessiveConditions = findRecessiveConditions(
        normalizedMother,
        normalizedFather,
        selectedKeys
    );

    return result;
}

module.exports = {
    MAX_RECESSIVE_CONDITIONS,
    MAX_ALBINO_DOMINANT_CONDITIONS,
    generateBirthCondition,
    normalizeParent,
    calculateHealthChance,
    varyConditionSeverity,
    findRecessiveConditions,
    rollDominantCondition
};
