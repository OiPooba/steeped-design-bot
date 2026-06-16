const { personalities } = require("../data/personalities");

// 🎲 random helper
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 🎯 filter traits by category
function getByCategory(category) {
  return personalities.filter(p => p.category === category);
}

// 🎲 single trait roll
function rollSingle() {
  return random(personalities).name;
}

// 🎲 full roll (used by /fullpersonality)
function rollFull() {
  return {
    result: [
      rollSingle(),
      rollSingle(),
      rollSingle()
    ]
  };
}

// 🎲 rarity-based roll (fixed for your structure)
function rollRarity() {
  const roll = Math.random();

  const positive = getByCategory("positive");
  const neutral = getByCategory("neutral");
  const negative = getByCategory("negative");

  // 🟢 COMMON
  if (roll < 0.70) {
    return {
      rarity: "Common",
      result: [
        random(positive).name,
        random(neutral).name,
        random(negative).name
      ]
    };
  }

  // 🔵 POSITIVE LEAN
  if (roll < 0.90) {
    return {
      rarity: "Uncommon (Positive Lean)",
      result: [
        random(positive).name,
        random(positive).name,
        random(neutral).name
      ]
    };
  }

  // 🔴 NEGATIVE LEAN
  if (roll < 0.95) {
    return {
      rarity: "Uncommon (Negative Lean)",
      result: [
        random(negative).name,
        random(negative).name,
        random(neutral).name
      ]
    };
  }

  // 🟣 CHAOS
  if (roll < 0.99) {
    return {
      rarity: "Rare (Chaotic Mix)",
      result: [
        random(personalities).name,
        random(personalities).name,
        random(personalities).name
      ]
    };
  }

  // 🟡 LEGENDARY
  const typeRoll = Math.random();

  const pick = (list) => random(list).name;

  if (typeRoll < 0.33) {
    return {
      rarity: "Legendary (Pure Positive)",
      result: [pick(positive), pick(positive), pick(positive)]
    };
  }

  if (typeRoll < 0.66) {
    return {
      rarity: "Legendary (Pure Neutral)",
      result: [pick(neutral), pick(neutral), pick(neutral)]
    };
  }

  return {
    rarity: "Legendary (Pure Negative)",
    result: [pick(negative), pick(negative), pick(negative)]
  };
}

module.exports = {
  rollSingle,
  rollFull,
  rollRarity
};