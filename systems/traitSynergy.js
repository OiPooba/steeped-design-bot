const { personalities } = require("../data/personalities");

/* =========================
   HELPERS
========================= */

function getTraitObjects(traits) {
  return traits
    .map(t => personalities.find(p => p.name === t.name || p.name === t))
    .filter(Boolean);
}

function getAllTags(traitObjects) {
  const tags = [];
  for (const trait of traitObjects) {
    if (trait?.tags) tags.push(...trait.tags);
  }
  return tags;
}

function countTags(tags) {
  const map = new Map();

  for (const tag of tags) {
    map.set(tag, (map.get(tag) || 0) + 1);
  }

  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

/* =========================
   SYNERGY MAP (UNCHANGED)
   - IMPORTANT: we DO NOT remove or rewrite entries
========================= */

const synergyMap = [

/* =========================
   🛡️ GUARDIAN / PROTECTOR
========================= */

{ tags: ["warrior", "warrior"], result: "Guardian Archetype. Protects others through loyalty and instinctive care." },
{ tags: ["warrior", "love"], result: "Bound Protector. Deep emotional attachment fuels defense instincts." },
{ tags: ["warrior", "asocial"], result: "Silent Guardian. Protects without recognition." },
{ tags: ["warrior", "survival"], result: "Instinctive Shield. Reacts immediately to threats." },
{ tags: ["warrior", "loyalty"], result: "Devoted Protector. Loyalty defines actions." },

{ tags: ["strategy", "survival"], result: "Watchful Defender. Always alert to danger." },
{ tags: ["warrior", "anxious"], result: "Restrained Guardian. Avoids unnecessary conflict." },
{ tags: ["love", "social"], result: "Nurturing Guardian. Protects through care." },
{ tags: ["survival", "warrior"], result: "Reactive Defender. Fast instinctive protection." },
{ tags: ["leadership", "warrior"], result: "Commanding Guardian. Leads while protecting." },

{ tags: ["survival", "virtue"], result: "Heroic Defender. Will risk everything for others." },
{ tags: ["discipline", "social"], result: "Emotional Anchor. Stabilizes others in times of need." },
{ tags: ["asocial", "strategy"], result: "Gentle Sentinel. Watches and protects quietly." },
{ tags: ["survival", "love"], result: "Protective Instinct. Emotion-driven defense." },
{ tags: ["leadership", "social"], result: "Pack Guardian. Natural protector leader." },

/* =========================
   🔍 OBSERVER / ANALYST
========================= */

{ tags: ["strategy", "survival"], result: "Strategic Observer. Watches before acting." },
{ tags: ["anxious", "strategy"], result: "Paranoid Analyst. Sees hidden threats." },
{ tags: ["strategy", "curiosity"], result: "Analytical Mind. Pattern recognition expert." },
{ tags: ["strategy", "social"], result: "Deep Observer. Reads emotional shifts." },
{ tags: ["asocial", "creativity"], result: "Silent Analyst. Observes more than speaks." },

{ tags: ["survival", "anxious"], result: "Cautious Evaluator. Never rushes decisions." },
{ tags: ["survival", "survival"], result: "Reactive Thinker. Instantly adjusts." },

{ tags: ["survival", "strategy"], result: "Survival Analyst. Learns from danger." },
{ tags: ["strategy", "discipline"], result: "Deep Strategist. Long-term planner." },

{ tags: ["strategy", "careless"], result: "Flawed Analyst. Smart but dangerously reckless." },
{ tags: ["strategy", "vice"], result: "Manipulative Thinker. Uses logic for selfish gain." },

/* =========================
   ⚡ CHAOS / IMPULSE
========================= */

{ tags: ["chaos", "survival"], result: "Chaos Reactor. Acts before thinking." },
{ tags: ["chaos", "strategy"], result: "Unstable Planner. Brilliant but unpredictable." },
{ tags: ["chaos", "social"], result: "Chaotic Entertainer. Disrupts every group." },
{ tags: ["chaos", "love"], result: "Volatile Affection. Emotional unpredictability." },
{ tags: ["chaos", "creativity"], result: "Idea Storm. Explosive imagination bursts." },

{ tags: ["chaos", "discipline"], result: "Broken Order. Structure constantly collapses." },
{ tags: ["chaos", "ambition"], result: "Unstable Climber. Risk-driven success chasing." },
{ tags: ["chaos", "survival"], result: "Danger Instinct. Thrives in risk." },
{ tags: ["chaos", "vice"], result: "Ruin Bringer. Destructive tendencies." },
{ tags: ["chaos", "careless"], result: "Accidental Disaster. Causes problems unintentionally." },

/* =========================
   🧠 STRATEGY / INTELLIGENCE
========================= */

{ tags: ["strategy", "ambition"], result: "Endgame Mind. Always thinking ahead." },
{ tags: ["strategy", "survival"], result: "Risk Analyzer. Constant evaluation." },
{ tags: ["strategy", "leadership"], result: "Tactical Commander. Plans group movement." },
{ tags: ["strategy", "curiosity"], result: "Experimenter Mind. Tests everything." },
{ tags: ["strategy", "virtue"], result: "Just Planner. Morally guided decisions." },

{ tags: ["strategy", "vice"], result: "Cold Strategist. Ruthless calculation." },
{ tags: ["strategy", "creativity"], result: "Inventive Tactician. Unorthodox planning to solve any problem." },
{ tags: ["strategy", "chaos"], result: "Unstable Genius. Brilliant but erratic, never know what may happen." },
{ tags: ["strategy", "discipline"], result: "Structured Thinker. Controlled logic." },
{ tags: ["strategy", "anxious"], result: "Overplanner. Paralysis through thought." },

/* =========================
   🧍 SOCIAL / ASOCIAL
========================= */

{ tags: ["social", "love"], result: "Heartbound Companion. Deep emotional bonding." },
{ tags: ["social", "leadership"], result: "Charismatic Commander. Inspires groups naturally." },
{ tags: ["social", "creativity"], result: "Expressive Socializer. Artistic communication style." },
{ tags: ["social", "virtue"], result: "Gentle Connector. Kind and fair interactions." },

{ tags: ["social", "vice"], result: "Manipulative Influencer. Controls group dynamics." },
{ tags: ["social", "anxious"], result: "Hesitant Socializer. Wants connection but fears it." },
{ tags: ["social", "careless"], result: "Unfiltered Speaker. No social restraint." },
{ tags: ["social", "discipline"], result: "Measured Communicator. Controlled interaction style." },

{ tags: ["asocial", "survival"], result: "Lone Survivor. Independent and self-reliant." },
{ tags: ["asocial", "strategy"], result: "Silent Observer. Reads situations without involvement." },
{ tags: ["asocial", "chaos"], result: "Detached Chaos. Unpredictable but isolated." },

/* =========================
   ⚔️ WAR + LOYALTY / CORE COMBOS
========================= */

{ tags: ["warrior", "loyalty"], result: "Oathblade. Fights only for sworn bonds, only defends those it's closest to." },
{ tags: ["warrior", "virtue"], result: "Honorable Fighter. Moral combatant." },
{ tags: ["warrior", "vice"], result: "Merciless Raider. No moral limits." },
{ tags: ["warrior", "careless"], result: "Wild Attacker. No regard for consequence." },
{ tags: ["warrior", "creativity"], result: "Adaptive Duelist. Unpredictable combat style." },

/* =========================
   🌿 EARTHBOUND / ENVIRONMENT
========================= */

{ tags: ["earthbound", "survival"], result: "Terrain Walker. Lives through environmental mastery." },
{ tags: ["earthbound", "discipline"], result: "Grounded Routine. Stable, repetitive survival habits and paths to maximize their favored environments." },
{ tags: ["earthbound", "careless"], result: "Clumsy Wanderer. Survives despite mistakes in their desired environment." },

/* =========================
   💛 LOVE / EMOTION CORE
========================= */

{ tags: ["love", "virtue"], result: "Pure Devotion. Love guided by morality." },
{ tags: ["love", "vice"], result: "Toxic Attachment. Harmful emotional bonds." },
{ tags: ["love", "anxious"], result: "Fearful Bonding. Clingy emotional attachment." },
{ tags: ["love", "creativity"], result: "Romantic Visionary. Expresses love imaginatively." },
{ tags: ["love", "loyalty"], result: "Unbreakable Bond. Loyalty fused with affection." },

/* =========================
   🎨 CREATIVITY CORE
========================= */

{ tags: ["creativity", "discipline"], result: "Crafted Genius. Structured creativity." },
{ tags: ["creativity", "vice"], result: "Distorted Artist. Dark imagination." },
{ tags: ["creativity", "virtue"], result: "Inspired Creator. Positive imagination." },
{ tags: ["creativity", "careless"], result: "Chaotic Maker. Builds without planning." },

/* =========================
   😄 COMEDY CORE
========================= */

{ tags: ["comedic", "social"], result: "Social Jester. Group entertainer." },
{ tags: ["comedic", "chaos"], result: "Laughing Disaster. Humor in chaos." },
{ tags: ["comedic", "careless"], result: "Accidental Comedian. Funny mistakes." },
{ tags: ["comedic", "virtue"], result: "Kind Humorist. Gentle comedy." },

/* =========================
   ⚖️ VIRTUE / VICE CORE
========================= */

{ tags: ["virtue", "discipline"], result: "Principled Guardian. Moral structure." },
{ tags: ["virtue", "survival"], result: "Honor Survivor. Morality under pressure." },
{ tags: ["vice", "survival"], result: "Ruthless Survivor. Self-first instincts." },
{ tags: ["vice", "discipline"], result: "Controlled Corruption. Structured wrongdoing." },
{ tags: ["vice", "anxious"], result: "Guilt Spiral. Fear-driven morality collapse." },

/* =========================
   🎭 SILLY / PURE CHAOS FUN BLOCK
========================= */

{ tags: ["chaos", "chaos"], result: "Reality Glitch. Behavior breaks logic entirely and even allies cannot predict actions." },
{ tags: ["comedic", "chaos"], result: "Walking Disaster Comedian. Every mistake becomes accidental entertainment." },
{ tags: ["comedic", "comedic"], result: "Pure Clown Energy. Exists solely to generate chaos and laughter." },
{ tags: ["social", "comedic"], result: "Attention Magnet. Turns every situation into a performance." },
{ tags: ["social", "chaos"], result: "Group Menace. Disrupts social order just by existing nearby." },
{ tags: ["careless", "chaos"], result: "Oops Machine. Everything they do somehow becomes a problem." },
{ tags: ["careless", "careless"], result: "Existential Hazard. Danger level increases when they try to help." },
{ tags: ["chaos", "love"], result: "Chaotic Romance. Emotional attachment causes unpredictable behavior spikes." },
{ tags: ["love", "comedic"], result: "Romantic Fool. Affection expressed through awkward nonsense." },
{ tags: ["creativity", "chaos"], result: "Brain Firework. Ideas explode in random directions nonstop." },
{ tags: ["creativity", "comedic"], result: "Joke Architect. Builds humor into everything unintentionally." },
{ tags: ["chaos", "earthbound"], result: "Mud Gremlin. Dirt, noise, and confusion follow their movement." },
{ tags: ["earthbound", "comedic"], result: "Nature Clown. Somehow slips, trips, and thrives in terrain." },
{ tags: ["discipline", "chaos"], result: "Broken Routine Engine. Tries structure, immediately fails it." },
{ tags: ["discipline", "discipline"], result: "Overclocked Order. Too structured to function normally." },
{ tags: ["virtue", "chaos"], result: "Accidental Saint. Does good things for completely chaotic reasons." },
{ tags: ["vice", "chaos"], result: "Certified Menace. Chaos with intent but no direction." },
{ tags: ["vice", "vice"], result: "Pure Bad Luck Core. Nothing they do improves anything ever." },
{ tags: ["anxious", "chaos"], result: "Paranoia Spiral. Overthinks into unpredictable panic actions." },
{ tags: ["strategy", "chaos"], result: "Unstable Genius. Plans perfectly, executes unpredictably." },
{ tags: ["strategy", "comedic"], result: "Overplanned Joke. Even humor has a 12-step strategy." },
{ tags: ["survival", "chaos"], result: "Lucky Survivor. Should be dead, refuses to cooperate with logic." },
{ tags: ["survival", "comedic"], result: "Comedy Immortal. Survives purely through ridiculous luck." },
{ tags: ["warrior", "comedic"], result: "Clumsy Fighter. Wins battles through accidental physics abuse." },
{ tags: ["warrior", "chaos"], result: "Battle Tornado. Fighting style is legally questionable." },
{ tags: ["warrior", "warrior"], result: "Overkill Entity. Fights everything like it owes them money." },
{ tags: ["social", "social"], result: "Main Character Syndrome. Everything becomes a spotlight moment." },
{ tags: ["love", "love"], result: "Emotional Overload. Attachment level exceeds safe operating limits." },
{ tags: ["earthbound", "chaos"], result: "Swamp Incident. No one knows how they got there or why." }
];
/* =========================
   🔥 FIXED SYNERGY ENGINE (MULTI-TRAIT SCORING)
========================= */

function getSynergy(traits) {
  const traitObjects = getTraitObjects(traits);
  const tags = getAllTags(traitObjects);

  if (!tags.length) return null;

  const tagCounts = countTags(tags);

  const synergyScores = [];

  for (const entry of synergyMap) {
    let score = 0;

    for (const tag of entry.tags) {
      score += tags.filter(t => t === tag).length;
    }

    if (score > 0) {
      synergyScores.push({
        result: entry.result,
        score
      });
    }
  }

  if (!synergyScores.length) return null;

  synergyScores.sort((a, b) => b.score - a.score);

  // keep top 3 synergies
  const top = synergyScores.slice(0, 3);

  return top;
}

module.exports = { getSynergy };