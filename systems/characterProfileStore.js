const fs = require("fs");
const path = require("path");


const STORE_PATH = path.join(
    __dirname,
    "..",
    "data",
    "characterProfiles.json"
);


function normalizeCharacterName(name) {
    return `${name || ""}`
    .trim()
    .toLocaleLowerCase();
}


function readStore() {
    try {
        const stored = JSON.parse(
            fs.readFileSync(STORE_PATH, "utf8")
        );

        return { characters:stored.characters || {} };
    }
    catch(error) {
        return { characters:{} };
    }
}


function writeStore(store) {
    fs.writeFileSync(
        STORE_PATH,
        `${JSON.stringify(store, null, 2)}\n`,
        "utf8"
    );
}


function updateCharacterProfile({
    ownerId,
    ownerName,
    characterName,
    updates
}) {
    const key = normalizeCharacterName(characterName);

    if(!key){
        throw new Error("A character name is required to save a profile.");
    }

    const store = readStore();
    const records = store.characters[key] || [];
    const existingIndex = records.findIndex(
        record => record.ownerId === ownerId
    );
    const existing = existingIndex >= 0
        ? records[existingIndex]
        : {};
    const now = new Date().toISOString();
    const record = {
        ownerId,
        ownerName:ownerName || existing.ownerName || "Unknown user",
        characterName,
        birthResult:null,
        parents:null,
        personality:null,
        injuries:[],
        createdAt:existing.createdAt || now,
        updatedAt:now,
        ...existing,
        ...updates,
        ownerId,
        ownerName:ownerName || existing.ownerName || "Unknown user",
        characterName,
        updatedAt:now
    };

    if(existingIndex >= 0){
        records[existingIndex] = record;
    }
    else {
        records.push(record);
    }

    store.characters[key] = records;
    writeStore(store);

    return record;
}


function saveCharacterProfile({
    ownerId,
    ownerName,
    characterName,
    birthResult,
    parents = null
}) {
    return updateCharacterProfile({
        ownerId,
        ownerName,
        characterName,
        updates:{ birthResult, parents }
    });
}


function saveCharacterPersonality({
    ownerId,
    ownerName,
    characterName,
    personality
}) {
    return updateCharacterProfile({
        ownerId,
        ownerName,
        characterName,
        updates:{
            personality:{
                ...personality,
                rolledAt:new Date().toISOString()
            }
        }
    });
}


function saveCharacterInjury({
    ownerId,
    ownerName,
    characterName,
    injury
}) {
    const existing = getCharacterProfiles({
        characterName,
        ownerId,
        ignoreOthers:true
    })[0];
    const injuries = [
        ...(existing?.injuries || []),
        injury
    ].slice(-10);

    return updateCharacterProfile({
        ownerId,
        ownerName,
        characterName,
        updates:{ injuries }
    });
}


function getCharacterProfiles({
    characterName,
    ownerId,
    ignoreOthers = true
}) {
    const key = normalizeCharacterName(characterName);
    const records = readStore().characters[key] || [];

    return ignoreOthers
        ? records.filter(record => record.ownerId === ownerId)
        : records;
}


module.exports = {
    normalizeCharacterName,
    saveCharacterProfile,
    saveCharacterPersonality,
    saveCharacterInjury,
    getCharacterProfiles
};
