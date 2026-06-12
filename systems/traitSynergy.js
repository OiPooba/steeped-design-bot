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

{ tags: ["bonding", "social"], result: "Guardian Archetype. Protects others through loyalty and instinctive care." },
{ tags: ["bonding", "emotion"], result: "Bound Protector. Deep emotional attachment fuels defense instincts." },
{ tags: ["social", "behavior"], result: "Silent Guardian. Protects without recognition." },
{ tags: ["survival", "bonding"], result: "Instinctive Shield. Reacts immediately to threats." },
{ tags: ["bonding", "social"], result: "Devoted Protector. Loyalty defines actions." },

{ tags: ["observation", "survival"], result: "Watchful Defender. Always alert to danger." },
{ tags: ["survival", "behavior"], result: "Restrained Guardian. Avoids unnecessary conflict." },
{ tags: ["social", "emotion"], result: "Nurturing Guardian. Protects through care." },
{ tags: ["survival", "chaos"], result: "Reactive Defender. Fast instinctive protection." },
{ tags: ["social", "leadership"], result: "Commanding Guardian. Leads while protecting." },

{ tags: ["survival", "bonding"], result: "Heroic Defender. Will risk everything for others." },
{ tags: ["emotion", "social"], result: "Emotional Anchor. Stabilizes others." },
{ tags: ["bonding", "observation"], result: "Gentle Sentinel. Watches and protects quietly." },
{ tags: ["emotion", "survival"], result: "Protective Instinct. Emotion-driven defense." },
{ tags: ["leadership", "bonding"], result: "Pack Guardian. Natural protector leader." },

/* =========================
   🔍 OBSERVER / ANALYST
========================= */

{ tags: ["observation", "survival"], result: "Strategic Observer. Watches before acting." },
{ tags: ["thinking", "emotion"], result: "Paranoid Analyst. Sees hidden threats." },
{ tags: ["intelligence", "observation"], result: "Analytical Mind. Pattern recognition expert." },
{ tags: ["observation", "emotion"], result: "Deep Observer. Reads emotional shifts." },
{ tags: ["social", "behavior"], result: "Silent Analyst. Observes more than speaks." },

{ tags: ["survival", "thinking"], result: "Cautious Evaluator. Never rushes decisions." },
{ tags: ["observation", "behavior"], result: "Pattern Seeker. Notices repetition." },
{ tags: ["emotion", "thinking"], result: "Detached Watcher. Emotionally distant observer." },
{ tags: ["intelligence", "observation"], result: "Insightful Analyst. Sees what others miss." },
{ tags: ["survival", "adaptation"], result: "Reactive Thinker. Instantly adjusts." },

{ tags: ["survival", "intelligence"], result: "Survival Analyst. Learns from danger." },
{ tags: ["thinking", "behavior"], result: "Overthink Observer. Endless analysis loop." },
{ tags: ["observation", "social"], result: "Quiet Reader. Understands people deeply." },
{ tags: ["emotion", "observation"], result: "Empathic Watcher. Feels emotional shifts." },
{ tags: ["intelligence", "thinking"], result: "Deep Strategist. Long-term planner." },

/* =========================
   ⚡ CHAOS / IMPULSE
========================= */

{ tags: ["chaos", "survival"], result: "Chaos Reactor. Acts before thinking." },
{ tags: ["chaos", "exploration"], result: "Instinct Explorer. Driven by curiosity." },
{ tags: ["chaos", "behavior"], result: "Erratic Force. Unpredictable energy." },
{ tags: ["emotion", "chaos"], result: "Reactive Storm. Emotional bursts." },
{ tags: ["exploration", "behavior"], result: "Spontaneous Wanderer. No planning." },

{ tags: ["chaos", "adaptation"], result: "Controlled Chaos. Unstable but effective." },
{ tags: ["chaos", "behavior"], result: "Impulsive Challenger. Pushes limits." },
{ tags: ["chaos", "exploration"], result: "Erratic Explorer. Curious instability." },
{ tags: ["survival", "chaos"], result: "Chaos Driven. Thrives in danger." },
{ tags: ["chaos", "behavior"], result: "Danger Instinct. Seeks risk." },

{ tags: ["emotion", "chaos"], result: "Explosive Reaction. Emotional overload." },
{ tags: ["chaos", "behavior"], result: "Chaotic Instinct. No pattern behavior." },
{ tags: ["chaos", "exploration"], result: "Curiosity Reactor. Instant action." },
{ tags: ["chaos", "social"], result: "Chaotic Prankster. Unpredictable humor." },
{ tags: ["social", "behavior"], result: "Playful Disruptor. Breaks tension." },

{ tags: ["chaos", "bonding"], result: "Wild Companion. Loyal but unpredictable." },
{ tags: ["chaos", "emotion"], result: "Emotional Volatility. Rapid mood shifts." },
{ tags: ["chaos", "social"], result: "Social Gremlin. Chaos in groups." },

/* =========================
   🧠 STRATEGY / INTELLIGENCE
========================= */

{ tags: ["intelligence", "survival"], result: "Master Planner. Long-term strategist." },
{ tags: ["intelligence", "adaptation"], result: "Evolving Intellect. Constant improvement." },
{ tags: ["intelligence", "behavior"], result: "Reactive Strategist. Fast adaptation." },
{ tags: ["intelligence", "observation"], result: "Analytical Mind. Pattern expert." },

{ tags: ["thinking", "strategy"], result: "Silent Strategist. Hidden planning." },
{ tags: ["intelligence", "learning"], result: "Eager Learner. Rapid growth mindset." },
{ tags: ["adaptation", "intelligence"], result: "Rapid Improver. Fast learning curve." },
{ tags: ["calm", "intelligence"], result: "Flow State Thinker. Balanced logic." },

{ tags: ["thinking", "survival"], result: "Risk Analyzer. Constant evaluation." },
{ tags: ["intelligence", "emotion"], result: "Emotional Strategist. Logic + feeling blend." },
{ tags: ["behavior", "strategy"], result: "Methodical Actor. Structured execution." },

/* =========================
   🧍 SOCIAL / CARE
========================= */

{ tags: ["social", "bonding"], result: "Social Connector. Builds relationships." },
{ tags: ["social", "behavior"], result: "Quiet Ally. Reliable presence." },
{ tags: ["leadership", "social"], result: "Natural Leader. Draws others in." },
{ tags: ["emotion", "social"], result: "Warm Presence. Comforting energy." },

{ tags: ["social", "behavior"], result: "Selective Socializer. Chooses interactions." },
{ tags: ["emotion", "bonding"], result: "Harmonizer. Emotional balance keeper." },
{ tags: ["behavior", "social"], result: "Quiet Helper. Supports silently." },
{ tags: ["emotion", "social"], result: "Gentle Caretaker. Emotionally attentive." },

/* =========================
   🎭 SILLY / GOOFY
========================= */

{ tags: ["social", "chaos"], result: "Chaos Gremlin. Funny unpredictable energy." },
{ tags: ["behavior", "social"], result: "Clumsy Comedian. Accidentally funny." },
{ tags: ["emotion", "chaos"], result: "Laugh Reactor. Humor in everything." },
{ tags: ["social", "behavior"], result: "Goofy Spirit. Lighthearted energy." },

{ tags: ["chaos", "bonding"], result: "Chaotic Best Friend. Loyal chaos." },
{ tags: ["social", "chaos"], result: "Prank Enthusiast. Lives for jokes." },
{ tags: ["behavior", "chaos"], result: "Walking Meme. Everything is funny." },
{ tags: ["emotion", "social"], result: "Happy Disaster. Joyful chaos." },
{ tags: ["chaos", "exploration"], result: "Lost Goblin Energy. Wanders into trouble." },
{ tags: ["social", "behavior"], result: "Friendly Fool. Endearing silliness." }
];

/* =========================
   🔥 FIXED SYNERGY ENGINE (MULTI-TRAIT SCORING)
========================= */

function getSynergy(traits) {
  const traitObjects = getTraitObjects(traits);
  const tags = getAllTags(traitObjects);

  if (!tags.length) return null;

  const tagCounts = countTags(tags);

  let bestMatch = null;
  let bestScore = 0;

  // score EVERY synergy against ALL tags
  for (const synergy of synergyMap) {
    let score = 0;

    for (const tag of synergy.tags) {
      score += tags.filter(t => t === tag).length;
    }

    // must match at least 2 total tag hits
    if (score >= 2 && score > bestScore) {
      bestScore = score;
      bestMatch = synergy.result;
    }
  }

  return bestMatch;
}

module.exports = { getSynergy };