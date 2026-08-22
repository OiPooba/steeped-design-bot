const { personalities } = require("../data/personalities");


/* =========================
   HELPERS
========================= */


function getPersonalityTraits(selectedTraits) {

  const traitValues = {};

  for (const trait of selectedTraits) {

    const personality = personalities.find(
      p => p.name === trait.name || p.name === trait
    );

    if (!personality?.traits) continue;


    for (const key in personality.traits) {

      traitValues[key] =
        (traitValues[key] || 0) + personality.traits[key];

    }

  }

  return traitValues;
}



/* =========================
   SYNERGY MAP
   Trait Based System
   Requirements:
   - Positive numbers = must be HIGHER
   - Negative numbers = must be LOWER
   - 8+ is considered a strong trait
========================= */


/* =========================
   SYNERGY MAP
========================= */

const synergyMap = [

/* =========================
   🛡️ GUARDIAN / PROTECTOR
========================= */

<<<<<<< HEAD

{
name:"Guardian Archetype",

requirements:{
 courage:7,
 loyalty:6
},
=======
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
>>>>>>> origin/main

result:
"Protects others through bravery and devotion."
},


{
name:"Bound Protector",

requirements:{
 courage:6,
 empathy:5,
 loyalty:7
},

result:
"Deep emotional attachment fuels defense instincts."
},


{
name:"Silent Guardian",

requirements:{
 courage:5,
 independence:7,
 social:-5
},

result:
"Protects others without seeking recognition."
},


{
name:"Instinctive Shield",

requirements:{
 courage:6,
 Activity:8,
 reason:-3
},

result:
"Reacts immediately to threats before thinking."
},


{
name:"Devoted Protector",

requirements:{
 loyalty:8,
 empathy:6
},

result:
"Loyalty defines every action."
},
/* =========================
   🔍 OBSERVER / ANALYST
========================= */

<<<<<<< HEAD

{
name:"Strategic Observer",

requirements:{
 intelligence:8,
 reason:7,
 social:-3
},

result:
"Watches situations carefully and acts only when the outcome is understood."
},


{
name:"Paranoid Analyst",

requirements:{
 intelligence:5,
 confidence:-7
},

result:
"Sees hidden dangers everywhere and constantly searches for threats."
},


{
name:"Analytical Mind",

requirements:{
 intelligence:8,
 curiosity:6
},

result:
"Naturally identifies patterns, connections, and solutions."
},


{
name:"Deep Observer",

requirements:{
 intelligence:6,
 social:5,
 empathy:5
},

result:
"Reads the emotions and behaviors of others with unusual accuracy."
},


{
name:"Silent Analyst",

requirements:{
 intelligence:7,
 social:-7,
 independence:6
},

result:
"Prefers watching and understanding rather than participating."
},


{
name:"Cautious Evaluator",

requirements:{
 reason:8,
 courage:-5
},

result:
"Carefully weighs every possible outcome before acting."
},


{
name:"Reactive Thinker",

requirements:{
 courage:7,
 Activity:7,
 reason:-5
},

result:
"Adapts quickly when situations change, even without a plan."
},


{
name:"Survival Analyst",

requirements:{
 intelligence:7,
 courage:6,
 curiosity:6
},

result:
"Learns from danger and uses experience to survive."
},


{
name:"Deep Strategist",

requirements:{
 intelligence:8,
 ambition:6,
 reason:8
},

result:
"Plans several steps ahead and rarely acts without purpose."
},


{
name:"Flawed Analyst",

requirements:{
 intelligence:7,
 reason:5,
 Activity:-5
},

result:
"Has great ideas but struggles to apply them effectively."
},


{
name:"Manipulative Thinker",

requirements:{
 intelligence:7,
 morality:-8,
 reason:7
},

result:
"Uses intelligence and planning for personal advantage."
},


=======
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
>>>>>>> origin/main

/* =========================
   ⚡ CHAOS / IMPULSE
========================= */

<<<<<<< HEAD

{
name:"Chaos Reactor",

requirements:{
 reason:-7,
 Activity:7
},

result:
"Acts before thinking and creates unpredictable situations."
},
=======
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
>>>>>>> origin/main


{
name:"Unstable Planner",

requirements:{
 intelligence:7,
 reason:-7,
 curiosity:7
},

result:
"Brilliant ideas appear suddenly, but execution is unpredictable."
},


{
name:"Chaotic Entertainer",

requirements:{
 comedy:6,
 social:6,
 reason:-6
},

result:
"Turns every situation into a performance or disaster."
},


{
name:"Volatile Affection",

requirements:{
 emotionality:7,
 loyalty:7,
 reason:-6
},

result:
"Feels deeply and reacts strongly when bonds are threatened."
},


{
name:"Idea Storm",

requirements:{
 creativity:7,
 curiosity:7,
 reason:-5
},

result:
"Creates endless ideas with little concern for order."
},


{
name:"Broken Order",

requirements:{
 discipline:-7,
 reason:-5,
 Activity:5
},

result:
"Attempts structure but constantly breaks routine."
},


{
name:"Unstable Climber",

requirements:{
 ambition:7,
 reason:-6
},

result:
"Chases success through risky and unpredictable choices."
},


{
name:"Danger Instinct",

requirements:{
 courage:7,
 reason:-7
},

result:
"Thrives on immediate action and ignores careful planning."
},


{
name:"Ruin Bringer",

requirements:{
 morality:-7,
 reason:-6
},

result:
"Creates destruction through poor choices or selfish motives."
},


{
name:"Accidental Disaster",

requirements:{
 Activity:7,
 reason:-7,
 confidence:6
},

result:
"Somehow creates problems despite good intentions."
},/* =========================
   🧠 STRATEGY / INTELLIGENCE
========================= */

<<<<<<< HEAD

{
name:"Endgame Mind",

requirements:{
 intelligence:7,
 ambition:7,
 reason:7
},

result:
"Always thinking ahead and planning toward future success."
},


{
name:"Risk Analyzer",

requirements:{
 intelligence:7,
 reason:7,
 courage:5
},

result:
"Calculates danger and opportunity before committing."
},


{
name:"Tactical Commander",

requirements:{
 intelligence:7,
 ambition:7,
 loyalty:6
},

result:
"Naturally organizes others and creates effective plans."
},


{
name:"Experimenter Mind",

requirements:{
 intelligence:6,
 curiosity:7,
 creativity:7
},

result:
"Tests ideas constantly to discover how things work."
},


{
name:"Cold Strategist",

requirements:{
 intelligence:7,
 morality:-7,
 reason:7
},

result:
"Uses careful calculation without allowing emotions to interfere. Doesn't have a hard time deciding paths that may put others at risk."
},


{
name:"Inventive Tactician",

requirements:{
 intelligence:7,
 creativity:7
},

result:
"Creates unusual solutions through clever thinking."
},


{
name:"Unstable Genius",

requirements:{
 intelligence:8,
 reason:-7,
 creativity:6
},

result:
"Brilliant ideas mixed with unpredictable decisions."
},


{
name:"Structured Thinker",

requirements:{
 intelligence:7,
 reason:7,
 ambition:5
},

result:
"Approaches problems with organization and control."
},


{
name:"Overplanner",

requirements:{
 intelligence:6,
 reason:6,
 confidence:-7
},

result:
"Thinks through every possibility until action becomes difficult."
},


=======
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
>>>>>>> origin/main

/* =========================
   🧍 SOCIAL / ASOCIAL
========================= */

<<<<<<< HEAD

{
name:"Heartbound Companion",

requirements:{
 social:7,
 empathy:7,
 loyalty:5
},

result:
"Forms deep emotional bonds and values companionship."
},


{
name:"Charismatic Commander",

requirements:{
 social:7,
 confidence:7,
 ambition:6
},

result:
"Naturally attracts followers and inspires groups."
},


{
name:"Expressive Socializer",

requirements:{
 social:7,
 creativity:7,
 comedy:5
},

result:
"Shares ideas and emotions through expression and personality."
},


{
name:"Gentle Connector",

requirements:{
 social:7,
 morality:6,
 empathy:7
},

result:
"Builds friendships through kindness and understanding."
},


{
name:"Manipulative Influencer",

requirements:{
 social:7,
 morality:-7,
 confidence:7
},

result:
"Uses charm and social skills to control situations."
},


{
name:"Hesitant Socializer",

requirements:{
 social:6,
 confidence:-7,
 emotionality:6
},

result:
"Desires connection but struggles with insecurity."
},


{
name:"Unfiltered Speaker",

requirements:{
 social:7,
 comedy:6,
 reason:-5
},

result:
"Says whatever comes to mind without considering consequences."
},


{
name:"Measured Communicator",

requirements:{
 social:6,
 reason:7,
 emotionality:-3
},

result:
"Communicates carefully and keeps emotions controlled."
},


{
name:"Lone Survivor",

requirements:{
 social:-7,
 independence:7,
 courage:6
},

result:
"Thrives without relying heavily on others."
},


{
name:"Silent Observer",

requirements:{
 social:-7,
 intelligence:7,
 curiosity:6
},

result:
"Watches and learns from the world around them."
},


{
name:"Detached Chaos",

requirements:{
 social:-7,
 reason:-7,
 independence:6
},

result:
"Acts unpredictably while remaining distant from others."
},/* =========================
   ⚔️ WAR + LOYALTY / CORE COMBOS
========================= */


{
name:"Oathblade",

requirements:{
 courage:7,
 loyalty:7,
 morality:6
},

result:
"Fights only for those they have sworn to protect."
},


{
name:"Honorable Fighter",

requirements:{
 courage:7,
 morality:7
},

result:
"Strong and brave while following a personal code."
},


{
name:"Merciless Raider",

requirements:{
 courage:7,
 morality:-7,
 confidence:6
},

result:
"Uses strength without hesitation or compassion."
},


{
name:"Wild Attacker",

requirements:{
 courage:7,
 Activity:5,
 reason:-7
},

result:
"Charges forward without considering consequences."
},


{
name:"Adaptive Duelist",

requirements:{
 courage:7,
 creativity:7,
 intelligence:6
},

result:
"Changes fighting style and tactics depending on the opponent."
},


{
name:"Devoted Champion",

requirements:{
 courage:7,
 loyalty:8,
 empathy:7
},

result:
"Protects others through absolute dedication."
},


{
name:"Fearless Challenger",

requirements:{
 courage:8,
 confidence:7
},

result:
"Faces obstacles directly and refuses to back down."
},


{
name:"Reluctant Hero",

requirements:{
 courage:7,
 empathy:7,
 confidence:-5
},

result:
"Acts bravely despite doubting themselves."
},


{
name:"Battle Strategist",

requirements:{
 courage:7,
 intelligence:7,
 reason:6
},

result:
"Combines strength with careful planning."
},


{
name:"Guardian Leader",

requirements:{
 courage:7,
 loyalty:7,
 social:6
},

result:
"Protects others while naturally taking command."
},



/* =========================
   🌿 NATURE / ENVIRONMENT
   (Converted from old earthbound tags)
========================= */


{
name:"Terrain Walker",

requirements:{
 curiosity:7,
 independence:7,
 Activity:6
},

result:
"Feels connected to exploring and adapting to different environments."
},


{
name:"Grounded Spirit",

requirements:{
 reason:7,
 emotionality:5,
 Activity:-3
},

result:
"Finds comfort in stability, routine, and familiar surroundings."
},


{
name:"Wild Wanderer",

requirements:{
 curiosity:7,
 independence:7,
 Activity:7
},

result:
"Feels most alive while exploring unknown places."
},


{
name:"Nature Guardian",

requirements:{
 empathy:7,
 loyalty:7,
 curiosity:6
},

result:
"Feels responsible for protecting living things around them."
},


{
name:"Mountain Soul",

requirements:{
 independence:7,
 confidence:6,
 social:-6
},

result:
"Prefers solitude, high places, and personal freedom."
},

{
name:"River Spirit",

requirements:{
 curiosity:7,
 emotionality:7,
 independence:6
},

result:
"Feels drawn toward movement, change, and natural cycles."
},


{
name:"Storm Heart",

requirements:{
 courage:7,
 curiosity:7,
 Activity:7
},

result:
"Drawn toward powerful forces and dramatic experiences."
},


{
name:"Moonlit Wanderer",

requirements:{
 emotionality:7,
 curiosity:7,
 social:-5
},

result:
"Finds comfort in quiet places, reflection, and nighttime exploration."
},


{
name:"Sun Seeker",

requirements:{
 Activity:7,
 confidence:6,
 emotionality:5
},

result:
"Feels energized by warmth, openness, and bright environments."
},


{
name:"Deep Forest Soul",

requirements:{
 curiosity:7,
 empathy:6,
 social:-4
},

result:
"Feels at peace surrounded by quiet natural spaces."
},


{
name:"Cave Dweller",

requirements:{
 independence:7,
 social:-7,
 reason:5
},

result:
"Prefers protected spaces and quiet isolation."
},


{
name:"Weather Watcher",

requirements:{
 curiosity:7,
 intelligence:6,
 emotionality:6
},

result:
"Observes natural patterns and finds meaning in changing conditions."
},/* =========================
   💛 LOVE / EMOTION CORE
========================= */


{
name:"Pure Devotion",

requirements:{
 empathy:7,
 loyalty:7,
 morality:7
},

result:
"Love guided by kindness, protection, and genuine care."
},


{
name:"Toxic Attachment",

requirements:{
 loyalty:7,
 emotionality:7,
 morality:-6
},

result:
"Forms intense bonds that may become unhealthy or controlling."
},


{
name:"Fearful Bonding",

requirements:{
 emotionality:7,
 loyalty:6,
 confidence:-7
},

result:
"Desires connection but fears losing those closest to them."
},


{
name:"Romantic Visionary",

requirements:{
 emotionality:7,
 creativity:7,
 empathy:7
},

result:
"Expresses affection through imagination and heartfelt gestures."
},


{
name:"Unbreakable Bond",

requirements:{
 loyalty:8,
 empathy:7
},

result:
"Once attached, they remain devoted through nearly anything."
},


{
name:"Heart of Gold",

requirements:{
 empathy:8,
 morality:7
},

result:
"Naturally prioritizes the wellbeing of others."
},


{
name:"Emotional Storm",

requirements:{
 emotionality:8,
 reason:-6
},

result:
"Experiences feelings intensely and reacts strongly."
},


{
name:"Cold Heart",

requirements:{
 emotionality:-7,
 empathy:-7
},

result:
"Keeps distance from emotions and struggles to connect."
},


{
name:"Comfort Giver",

requirements:{
 empathy:7,
 social:7,
 confidence:5
},

result:
"Creates safety and support for those around them."
},


{
name:"Protective Attachment",

requirements:{
 loyalty:8,
 courage:7,
 empathy:7
},

result:
"Protects those they love with fierce dedication."
},


=======
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
>>>>>>> origin/main

/* =========================
   🎨 CREATIVITY CORE
========================= */

<<<<<<< HEAD

{
name:"Crafted Genius",

requirements:{
 creativity:8,
 intelligence:7,
 reason:7
},

result:
"Combines imagination with careful planning and skill."
},


{
name:"Distorted Artist",

requirements:{
 creativity:8,
 morality:-7,
 emotionality:8
},

result:
"Creates powerful works shaped by darker emotions."
},


{
name:"Inspired Creator",

requirements:{
 creativity:8,
 morality:7,
 curiosity:7
},

result:
"Creates from kindness, wonder, and imagination."
},


{
name:"Chaotic Maker",

requirements:{
 creativity:6,
 reason:-7,
 Activity:7
},

result:
"Creates constantly without worrying about order or planning."
},


{
name:"Dream Weaver",

requirements:{
 creativity:8,
 curiosity:7
},

result:
"Lives through imagination and endless possibilities."
},


{
name:"Inventor Spirit",

requirements:{
 creativity:8,
 intelligence:8,
 curiosity:8
},

result:
"Constantly builds, experiments, and discovers new ideas."
},


{
name:"Artistic Soul",

requirements:{
 creativity:8,
 emotionality:8
},

result:
"Expresses inner feelings through creative outlets."
},


{
name:"Creative Performer",

requirements:{
 creativity:7,
 social:8,
 confidence:7
},

result:
"Enjoys sharing imagination and ideas with others."
},


{
name:"Visionary",

requirements:{
 creativity:8,
 ambition:7,
 intelligence:7
},

result:
"Sees possibilities others overlook and works toward them."
},


{
name:"Curious Creator",

requirements:{
 creativity:7,
 curiosity:8,
 Activity:6
},

result:
"Learns by experimenting and creating."
},/* =========================
   😄 COMEDY CORE
========================= */


{
name:"Social Jester",

requirements:{
 comedy:7,
 social:7
},

result:
"Uses humor to bring groups together and create friendships."
},


{
name:"Laughing Disaster",

requirements:{
 comedy:8,
 reason:-7,
 Activity:7
},

result:
"Turns mistakes and accidents into entertainment."
},


{
name:"Pure Clown Energy",

requirements:{
 comedy:8,
 reason:-7
},

result:
"Exists to create laughter, confusion, and unforgettable moments."
},


{
name:"Attention Magnet",

requirements:{
 comedy:8,
 social:8,
 confidence:8
},

result:
"Naturally becomes the center of attention."
},


{
name:"Kind Humorist",

requirements:{
 comedy:7,
 empathy:8,
 morality:7
},

result:
"Uses humor to comfort and encourage others."
},


{
name:"Awkward Comedian",

requirements:{
 comedy:8,
 confidence:-6,
 social:5
},

result:
"Attempts humor despite occasional social struggles."
},


{
name:"Dry Wit",

requirements:{
 comedy:7,
 intelligence:8,
 emotionality:-3
},

result:
"Uses clever observations and subtle humor."
},


{
name:"Playful Spirit",

requirements:{
 comedy:7,
 curiosity:7,
 Activity:8
},

result:
"Finds fun and excitement in everyday situations."
},


{
name:"Mischief Maker",

requirements:{
 comedy:8,
 reason:-5,
 curiosity:7
},

result:
"Enjoys playful trouble and unexpected situations."
},


{
name:"Storyteller",

requirements:{
 comedy:6,
 social:8,
 creativity:6
},

result:
"Captivates others through humor, stories, and expression."
},


=======
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
>>>>>>> origin/main

/* =========================
   ⚖️ VIRTUE / VICE CORE
========================= */

<<<<<<< HEAD

{
name:"Principled Guardian",

requirements:{
 morality:8,
 discipline:7,
 loyalty:7
},

result:
"Follows strong values while protecting others."
},


{
name:"Honor Survivor",

requirements:{
 morality:8,
 courage:7,
 independence:6
},

result:
"Maintains morals even during hardship."
},


{
name:"Ruthless Survivor",

requirements:{
 morality:-8,
 courage:8,
 independence:8
},

result:
"Does whatever is necessary to survive."
},


{
name:"Controlled Corruption",

requirements:{
 morality:-8,
 discipline:8,
 intelligence:7
},

result:
"Uses careful planning toward selfish goals."
},


{
name:"Guilt Spiral",

requirements:{
 morality:7,
 confidence:-8,
 emotionality:8
},

result:
"Carries heavy responsibility and struggles to forgive themselves."
},


{
name:"Moral Leader",

requirements:{
 morality:8,
 social:7,
 confidence:7
},

result:
"Guides others through fairness and example."
},


{
name:"Self Serving Mind",

requirements:{
 morality:-8,
 ambition:8
},

result:
"Prioritizes personal success above others."
},


{
name:"Corrupt Genius",

requirements:{
 intelligence:8,
 morality:-8,
 ambition:8
},

result:
"Uses intelligence and drive without ethical limits."
},


{
name:"Gentle Soul",

requirements:{
 morality:8,
 empathy:8,
 emotionality:7
},

result:
"Naturally kind, compassionate, and caring."
},


{
name:"Dark Ambition",

requirements:{
 ambition:8,
 morality:-7,
 confidence:7
},

result:
"Chases goals regardless of who gets hurt."
},/* =========================
   🎭 SILLY / PURE CHAOS FUN BLOCK
========================= */


{
name:"Reality Glitch",

requirements:{
 reason:-10,
 Activity:8,
 comedy:8
},

result:
"Logic appears optional. Even allies struggle to predict what happens next."
},


{
name:"Walking Disaster Comedian",

requirements:{
 comedy:8,
 reason:-8,
 Activity:8
},

result:
"Every mistake somehow becomes a legendary story."
},


{
name:"Pure Chaos Energy",

requirements:{
 reason:-7,
 curiosity:7,
 Activity:7
},

result:
"Moves through life following instinct, curiosity, and questionable decisions."
},


{
name:"Spotlight Storm",

requirements:{
 social:7,
 comedy:7,
 confidence:7
},

result:
"Naturally turns every moment into a performance."
},


{
name:"Group Menace",

requirements:{
 social:7,
 reason:-8,
 Activity:6
},

result:
"Somehow influences everyone nearby into joining the chaos."
},


{
name:"Oops Machine",

requirements:{
 Activity:6,
 reason:-6,
 confidence:-5
},

result:
"Attempts to help but regularly creates unexpected problems."
},


{
name:"Accidental Hazard",

requirements:{
 Activity:7,
 reason:-7
},

result:
"Chaos follows every action, even without intention."
},


{
name:"Chaotic Romance",

requirements:{
 emotionality:8,
 loyalty:6,
 reason:-6
},

result:
"Feels deeply and reacts unpredictably when bonds are involved."
},


{
name:"Romantic Fool",

requirements:{
 love:8,
 comedy:8,
 confidence:-5
},

result:
"Expresses affection through awkward but genuine actions."
},


{
name:"Brain Firework",

requirements:{
 creativity:10,
 reason:-8,
 curiosity:8
},

result:
"Produces endless ideas faster than they can organize them."
},


{
name:"Joke Architect",

requirements:{
 creativity:8,
 comedy:8,
 intelligence:7
},

result:
"Turns creativity and cleverness into constant humor."
},


{
name:"Nature Gremlin",

requirements:{
 curiosity:8,
 Activity:8,
 social:-5
},

result:
"Prefers exploring strange places over normal social behavior."
},


{
name:"Terrain Trickster",

requirements:{
 curiosity:8,
 independence:7,
 comedy:7
},

result:
"Somehow survives while causing confusion everywhere they go."
},


{
name:"Broken Routine Engine",

requirements:{
 discipline:-8,
 reason:-6,
 Activity:7
},

result:
"Attempts organization but immediately abandons the plan."
},


{
name:"Overclocked Order",

requirements:{
 discipline:7,
 reason:8,
 confidence:6
},

result:
"Creates so much structure that flexibility becomes difficult."
},


{
name:"Accidental Saint",

requirements:{
 morality:8,
 reason:-6,
 empathy:8
},

result:
"Does good things, even when their methods make little sense."
},


{
name:"Certified Menace",

requirements:{
 morality:-8,
 reason:-8,
 Activity:8
},

result:
"Chaos and selfish choices combine into a walking problem."
},


{
name:"Bad Luck Core",

requirements:{
 morality:-5,
 reason:-8,
 confidence:-6
},

result:
"Seems personally targeted by unfortunate circumstances."
},


{
name:"Paranoia Spiral",

requirements:{
 confidence:-8,
 reason:-8,
 emotionality:8
},

result:
"Fear and imagination combine into constant worry."
},


{
name:"Unstable Genius",

requirements:{
 intelligence:10,
 reason:-8,
 creativity:8
},

result:
"Brilliant thoughts appear from unpredictable logic."
},


{
name:"Overplanned Joke",

requirements:{
 intelligence:8,
 comedy:8,
 reason:10
},

result:
"Treats even humor like a carefully calculated strategy."
},


{
name:"Lucky Survivor",

requirements:{
 courage:8,
 reason:-8,
 Activity:8
},

result:
"Survives situations they probably should not have entered."
},


{
name:"Comedy Immortal",

requirements:{
 courage:8,
 comedy:10
},

result:
"Somehow survives through confidence, humor, and ridiculous luck."
},


{
name:"Clumsy Fighter",

requirements:{
 courage:8,
 comedy:8,
 reason:-5
},

result:
"Wins through accidental success rather than skill."
},


{
name:"Battle Tornado",

requirements:{
 courage:10,
 Activity:8,
 reason:-8
},

result:
"Fights with overwhelming energy and unpredictable movement."
},


{
name:"Overkill Entity",

requirements:{
 courage:10,
 confidence:10
},

result:
"Treats every challenge as if it requires maximum effort."
},


{
name:"Main Character Syndrome",

requirements:{
 social:10,
 confidence:10,
 ambition:8
},

result:
"Feels like every event is centered around them."
},


{
name:"Emotional Overload",

requirements:{
 emotionality:10,
 loyalty:8
},

result:
"Forms intense bonds and experiences everything deeply."
},


{
name:"Swamp Incident",

requirements:{
 curiosity:8,
 Activity:8,
 reason:-8
},

result:
"Nobody knows how they arrived there, but somehow they are thriving."
}
];



=======
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
>>>>>>> origin/main
/* =========================
   🔥 SYNERGY ENGINE
   MAX 3 STACKS
========================= */


function getSynergy(selectedTraits){


<<<<<<< HEAD
const traits = getPersonalityTraits(selectedTraits);


const matches = [];


for(const synergy of synergyMap){


let score = 0;

let valid = true;


for(const requirement in synergy.requirements){


const needed =
synergy.requirements[requirement];


const current =
traits[requirement] || 0;



if(needed > 0){


if(current >= needed){

score += current;

=======
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
>>>>>>> origin/main
}

else{

valid=false;
break;

}


}


if(needed < 0){


if(current <= needed){

score += Math.abs(current);

}

else{

valid=false;
break;

}


}


}



if(valid){

matches.push({

name: synergy.name,

description: synergy.result,

score

});

}


}



matches.sort((a,b)=>b.score-a.score);



/*
Maximum of 3 stacked synergies
*/

return matches.slice(0,3);


}



module.exports = {
getSynergy
};