const birthConditions = [

/* =========================
   👁 VISION SYSTEM
========================= */

{
  name: "Poor Night Vision",
  category: "Vision",
  severity: "Mild",
  rarity: "Common",
  description: "Struggles to see at night and may rely more on others in darkness.",
  inheritanceGroup: "vision"
},

{
  name: "Color Blindness",
  category: "Vision",
  severity: "Mild",
  rarity: "Common",
  description: "Difficulty distinguishing certain colors, markings, or environments.",
  inheritanceGroup: "vision"
},

{
  name: "Light Sensitivity",
  category: "Vision",
  severity: "Mild",
  rarity: "Common",
  description: "Bright environments cause discomfort; prefers shade or dim lighting.",
  inheritanceGroup: "vision"
},

{
  name: "Depth Perception Issues",
  category: "Vision",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Difficulty judging distances and may miscalculate movement.",
  inheritanceGroup: "vision"
},

{
  name: "Partial Vision",
  category: "Vision",
  severity: "Moderate",
  rarity: "Uncommon",
  description: "Vision is obstructed or limited in some way.",
  inheritanceGroup: "vision"
},

{
  name: "Tunnel Vision",
  category: "Vision",
  severity: "Moderate",
  rarity: "Uncommon",
  description: "Reduced peripheral awareness; struggles noticing things outside direct focus.",
  inheritanceGroup: "vision"
},

{
  name: "Clouded Vision",
  category: "Vision",
  severity: "Moderate",
  rarity: "Rare",
  description: "Vision becomes unclear, especially when stressed or exhausted.",
  inheritanceGroup: "vision"
},

{
  name: "Blind",
  category: "Vision",
  severity: "Severe",
  rarity: "Rare",
  description: "Vision is heavily impaired and requires major adaptation.",
  inheritanceGroup: "vision"
},


/* =========================
   👂 HEARING SYSTEM
========================= */

{
  name: "Poor Hearing",
  category: "Hearing",
  severity: "Mild",
  rarity: "Common",
  description: "Reduced hearing range; may miss distant calls.",
  inheritanceGroup: "hearing"
},

{
  name: "Sensitive Hearing",
  category: "Hearing",
  severity: "Mild",
  rarity: "Common",
  description: "Loud sounds are overwhelming and may cause discomfort.",
  inheritanceGroup: "hearing"
},

{
  name: "Selective Hearing",
  category: "Hearing",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Naturally filters out some sounds and may miss quieter noises.",
  inheritanceGroup: "hearing"
},

{
  name: "Disoriented Hearing",
  category: "Hearing",
  severity: "Moderate",
  rarity: "Uncommon",
  description: "Difficulty determining where sounds come from and may react incorrectly.",
  inheritanceGroup: "hearing"
},

{
  name: "Deaf",
  category: "Hearing",
  severity: "Severe",
  rarity: "Rare",
  description: "Cannot hear calls or environmental sounds.",
  inheritanceGroup: "hearing"
},


/* =========================
   🫁 RESPIRATORY SYSTEM
========================= */

{
  name: "Chronic Fatigue",
  category: "Respiratory",
  severity: "Mild",
  rarity: "Common",
  description: "Stamina regenerates slower and the individual tires easily.",
  inheritanceGroup: "respiratory"
},

{
  name: "Short-Winded",
  category: "Respiratory",
  severity: "Mild",
  rarity: "Common",
  description: "Becomes tired faster during extended activity.",
  inheritanceGroup: "respiratory"
},

{
  name: "Weak Lungs",
  category: "Respiratory",
  severity: "Moderate",
  rarity: "Uncommon",
  description: "Reduced stamina capacity; requires additional rest after exertion.",
  inheritanceGroup: "respiratory"
},

{
  name: "Asthmatic",
  category: "Respiratory",
  severity: "Moderate",
  rarity: "Uncommon",
  description: "Breathing can become difficult during exertion or around respiratory irritants.",
  inheritanceGroup: "respiratory"
},

{
  name: "Severe Lung Deficiency",
  category: "Respiratory",
  severity: "Extreme",
  rarity: "Very Rare",
  description: "Breathing capacity is extremely limited and requires constant care.",
  inheritanceGroup: "respiratory"
},

/* =========================
   🦴 SKELETAL / PHYSICAL SYSTEM
========================= */

{
  name: "Weak Joints",
  category: "Skeletal",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Certain movements cause discomfort and require more care.",
  inheritanceGroup: "physical"
},

{
  name: "Joint Stiffness",
  category: "Skeletal",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Requires additional time to loosen after resting.",
  inheritanceGroup: "physical"
},

{
  name: "Uneven Gait",
  category: "Skeletal",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Movement pattern is slightly uneven.",
  inheritanceGroup: "physical"
},

{
  name: "Slow Muscle Development",
  category: "Skeletal",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Strength develops slower than others.",
  inheritanceGroup: "physical"
},

{
  name: "Fragile Bones",
  category: "Skeletal",
  severity: "Moderate",
  rarity: "Rare",
  description: "Injuries are more severe and require longer recovery.",
  inheritanceGroup: "physical"
},

{
  name: "Chronic Joint Pain",
  category: "Skeletal",
  severity: "Moderate",
  rarity: "Rare",
  description: "Movement becomes harder after extended activity.",
  inheritanceGroup: "physical"
},

{
  name: "Muscle Weakness",
  category: "Skeletal",
  severity: "Moderate",
  rarity: "Rare",
  description: "Reduced physical strength compared to others.",
  inheritanceGroup: "physical"
},

{
  name: "Poor Muscle Recovery",
  category: "Skeletal",
  severity: "Moderate",
  rarity: "Rare",
  description: "Requires longer rest after physical activity.",
  inheritanceGroup: "physical"
},

{
  name: "Severe Bone Fragility",
  category: "Skeletal",
  severity: "Severe",
  rarity: "Very Rare",
  description: "Bones are extremely vulnerable to injury.",
  inheritanceGroup: "physical"
},

{
  name: "Muscular Degeneration",
  category: "Skeletal",
  severity: "Severe",
  rarity: "Very Rare",
  description: "Muscle strength decreases over time.",
  inheritanceGroup: "physical"
},

{
  name: "Major Structural Weakness",
  category: "Skeletal",
  severity: "Severe",
  rarity: "Very Rare",
  description: "Physical activity is significantly limited.",
  inheritanceGroup: "physical"
},

{
  name: "Severe Physical Weakness",
  category: "Skeletal",
  severity: "Extreme",
  rarity: "Extremely Rare",
  description: "Greatly reduced strength and endurance; requires lifelong adaptation.",
  inheritanceGroup: "physical"
},


/* =========================
   🧠 NEUROLOGICAL SYSTEM
========================= */

{
  name: "Slow Reaction Time",
  category: "Neurological",
  severity: "Mild",
  rarity: "Common",
  description: "Delayed response to danger or herd calls.",
  inheritanceGroup: "neurological"
},

{
  name: "Clumsy Balance",
  category: "Neurological",
  severity: "Mild",
  rarity: "Common",
  description: "Frequently stumbles, missteps, or misjudges movement.",
  inheritanceGroup: "neurological"
},

{
  name: "Heavy Sleeper",
  category: "Neurological",
  severity: "Mild",
  rarity: "Common",
  description: "Requires stronger stimulus to wake.",
  inheritanceGroup: "neurological"
},

{
  name: "Restless Sleeper",
  category: "Neurological",
  severity: "Mild",
  rarity: "Common",
  description: "Poor sleep quality causes slower movement and frequent naps.",
  inheritanceGroup: "neurological"
},

{
  name: "Poor Coordination",
  category: "Neurological",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Movements can be awkward or delayed.",
  inheritanceGroup: "neurological"
},

{
  name: "Distractible",
  category: "Neurological",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Easily loses focus when multiple things happen.",
  inheritanceGroup: "neurological"
},

{
  name: "Forgetful",
  category: "Neurological",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Difficulty remembering recent events or instructions.",
  inheritanceGroup: "neurological"
},

{
  name: "Impulsive Responses",
  category: "Neurological",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Acts quickly before fully processing situations.",
  inheritanceGroup: "neurological"
},

{
  name: "Slow Decision Making",
  category: "Neurological",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Needs more time to decide on actions.",
  inheritanceGroup: "neurological"
},

{
  name: "Sensory Overload",
  category: "Neurological",
  severity: "Moderate",
  rarity: "Rare",
  description: "Too much information at once causes confusion or hesitation.",
  inheritanceGroup: "neurological"
},

{
  name: "Emotional Regulation Difficulty",
  category: "Neurological",
  severity: "Moderate",
  rarity: "Rare",
  description: "Struggles controlling strong emotional reactions.",
  inheritanceGroup: "neurological"
},

{
  name: "Motor Control Issues",
  category: "Neurological",
  severity: "Moderate",
  rarity: "Rare",
  description: "Difficulty performing precise movements.",
  inheritanceGroup: "neurological"
},

{
  name: "Severe Coordination Disorder",
  category: "Neurological",
  severity: "Severe",
  rarity: "Very Rare",
  description: "Major difficulty controlling movement.",
  inheritanceGroup: "neurological"
},

{
  name: "Neurological Regression",
  category: "Neurological",
  severity: "Severe",
  rarity: "Very Rare",
  description: "Certain abilities weaken over time.",
  inheritanceGroup: "neurological"
},

{
  name: "Severe Neurological Delay",
  category: "Neurological",
  severity: "Extreme",
  rarity: "Extremely Rare",
  description: "Very delayed processing, reactions, and responses.",
  inheritanceGroup: "neurological"
},


/* =========================
   🌿 SENSORY SYSTEM
========================= */

{
  name: "Hyperreactive Senses",
  category: "Sensory",
  severity: "Mild",
  rarity: "Common",
  description: "Touch, smells, sounds, and sensations are overwhelming.",
  inheritanceGroup: "sensory"
},

{
  name: "Sensitive Feet",
  category: "Sensory",
  severity: "Mild",
  rarity: "Common",
  description: "Feet are easily irritated by terrain and textures.",
  inheritanceGroup: "sensory"
},

{
  name: "Touch Sensitivity",
  category: "Sensory",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Physical contact feels stronger than normal.",
  inheritanceGroup: "sensory"
},

{
  name: "Texture Sensitivity",
  category: "Sensory",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Certain surfaces are uncomfortable.",
  inheritanceGroup: "sensory"
},

{
  name: "Scent Sensitivity",
  category: "Sensory",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Strong smells are overwhelming.",
  inheritanceGroup: "sensory"
},

{
  name: "Temperature Sensitivity",
  category: "Sensory",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Heat and cold are felt more intensely.",
  inheritanceGroup: "sensory"
},

{
  name: "Vibration Sensitivity",
  category: "Sensory",
  severity: "Mild",
  rarity: "Rare",
  description: "Strong ground vibrations are uncomfortable.",
  inheritanceGroup: "sensory"
},

{
  name: "Pressure Sensitivity",
  category: "Sensory",
  severity: "Mild",
  rarity: "Rare",
  description: "Certain amounts of touch or pressure cause discomfort.",
  inheritanceGroup: "sensory"
},

{
  name: "Sensory Avoidance",
  category: "Sensory",
  severity: "Moderate",
  rarity: "Rare",
  description: "Avoids certain environments due to discomfort.",
  inheritanceGroup: "sensory"
},

{
  name: "Sensory Dependence",
  category: "Sensory",
  severity: "Moderate",
  rarity: "Rare",
  description: "Relies heavily on one sense while others are weaker.",
  inheritanceGroup: "sensory"
},

{
  name: "Severe Sensory Disorder",
  category: "Sensory",
  severity: "Extreme",
  rarity: "Extremely Rare",
  description: "Daily environments can become extremely difficult to tolerate.",
  inheritanceGroup: "sensory"
},
/* =========================
   🍃 IMMUNE SYSTEM
========================= */

{
  name: "Allergy Prone",
  category: "Immune",
  severity: "Mild",
  rarity: "Common",
  description: "Certain plants, environments, or seasons trigger discomfort.",
  inheritanceGroup: "immune"
},

{
  name: "Specific Allergy",
  category: "Immune",
  severity: "Mild",
  rarity: "Common",
  description: "A specific allergy is selected, such as pollen, plants, salt, or dust.",
  inheritanceGroup: "immune",
  selectable: true
},

{
  name: "Food Sensitivities",
  category: "Immune",
  severity: "Mild",
  rarity: "Common",
  description: "Certain foods cause discomfort or digestive issues.",
  inheritanceGroup: "immune"
},

{
  name: "Sensitive Skin",
  category: "Immune",
  severity: "Mild",
  rarity: "Common",
  description: "Easily develops irritation, rashes, or hives.",
  inheritanceGroup: "immune"
},

{
  name: "Seasonal Allergies",
  category: "Immune",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Certain seasons increase discomfort and reactions.",
  inheritanceGroup: "immune"
},

{
  name: "Cold Susceptibility",
  category: "Immune",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Becomes sick more easily in cold environments.",
  inheritanceGroup: "immune"
},

{
  name: "Heat Susceptibility",
  category: "Immune",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Struggles in extreme heat and requires more rest.",
  inheritanceGroup: "immune"
},

{
  name: "Environmental Sensitivity",
  category: "Immune",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Certain habitats cause discomfort or reactions.",
  inheritanceGroup: "immune"
},

{
  name: "Weak Constitution",
  category: "Immune",
  severity: "Moderate",
  rarity: "Rare",
  description: "More likely to experience illness effects.",
  inheritanceGroup: "immune"
},

{
  name: "Venom Sensitivity",
  category: "Immune",
  severity: "Moderate",
  rarity: "Rare",
  description: "Requires multiple days of rest after poison or venom exposure.",
  inheritanceGroup: "immune"
},

{
  name: "Slow Healing",
  category: "Immune",
  severity: "Moderate",
  rarity: "Rare",
  description: "Injuries and sickness take longer to recover from.",
  inheritanceGroup: "immune"
},

{
  name: "Autoimmune Reaction",
  category: "Immune",
  severity: "Moderate",
  rarity: "Very Rare",
  description: "The body occasionally reacts against itself.",
  inheritanceGroup: "immune"
},

{
  name: "Chronic Inflammation",
  category: "Immune",
  severity: "Moderate",
  rarity: "Very Rare",
  description: "Experiences recurring discomfort or swelling.",
  inheritanceGroup: "immune"
},

{
  name: "Severe Immune Weakness",
  category: "Immune",
  severity: "Severe",
  rarity: "Extremely Rare",
  description: "Highly vulnerable to sickness and requires careful management.",
  inheritanceGroup: "immune"
},

{
  name: "Severe Immune Deficiency",
  category: "Immune",
  severity: "Extreme",
  rarity: "Extremely Rare",
  description: "Extremely vulnerable to illness and infection.",
  inheritanceGroup: "immune"
},

{
  name: "Chronic Illness",
  category: "Immune",
  severity: "Extreme",
  rarity: "Extremely Rare",
  description: "Experiences recurring health problems throughout life.",
  inheritanceGroup: "immune"
},


/* =========================
   🦷 FEEDING SYSTEM
========================= */

{
  name: "Jaw Weakness",
  category: "Feeding",
  severity: "Mild",
  rarity: "Common",
  description: "Eats slower and requires pauses while feeding.",
  inheritanceGroup: "feeding"
},

{
  name: "Overactive Appetite",
  category: "Feeding",
  severity: "Mild",
  rarity: "Common",
  description: "Requires frequent feeding and consumes more than average.",
  inheritanceGroup: "feeding"
},

{
  name: "Sensitive Stomach",
  category: "Feeding",
  severity: "Mild",
  rarity: "Common",
  description: "Certain foods cause discomfort.",
  inheritanceGroup: "feeding"
},

{
  name: "Reduced Appetite",
  category: "Feeding",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Naturally eats less than others.",
  inheritanceGroup: "feeding"
},

{
  name: "Picky Digestive System",
  category: "Feeding",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Only tolerates certain foods well.",
  inheritanceGroup: "feeding"
},

{
  name: "Feeding Difficulty",
  category: "Feeding",
  severity: "Moderate",
  rarity: "Rare",
  description: "Struggles to consume enough food.",
  inheritanceGroup: "feeding"
},

{
  name: "Digestive Sensitivity",
  category: "Feeding",
  severity: "Moderate",
  rarity: "Rare",
  description: "Many foods cause problems.",
  inheritanceGroup: "feeding"
},

{
  name: "Nutrient Absorption Disorder",
  category: "Feeding",
  severity: "Severe",
  rarity: "Very Rare",
  description: "Body struggles gaining nutrients from food.",
  inheritanceGroup: "feeding"
},

{
  name: "Digestive Failure",
  category: "Feeding",
  severity: "Extreme",
  rarity: "Extremely Rare",
  description: "Unable to properly process nutrients without special care.",
  inheritanceGroup: "feeding"
},


/* =========================
   🗣 VOCAL SYSTEM
========================= */

{
  name: "Quiet Voice",
  category: "Vocal",
  severity: "Mild",
  rarity: "Common",
  description: "Naturally softer calls that travel shorter distances.",
  inheritanceGroup: "vocal"
},

{
  name: "Weak Call Strength",
  category: "Vocal",
  severity: "Mild",
  rarity: "Common",
  description: "Calls are quieter than normal.",
  inheritanceGroup: "vocal"
},

{
  name: "Voice Fatigue",
  category: "Vocal",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Calling too often causes temporary strain.",
  inheritanceGroup: "vocal"
},

{
  name: "Vocal Strain",
  category: "Vocal",
  severity: "Moderate",
  rarity: "Rare",
  description: "Uses calls less often or more quietly due to discomfort.",
  inheritanceGroup: "vocal"
},

{
  name: "Unstable Voice",
  category: "Vocal",
  severity: "Moderate",
  rarity: "Rare",
  description: "Calls may change unexpectedly.",
  inheritanceGroup: "vocal"
},

{
  name: "Partial Vocal Loss",
  category: "Vocal",
  severity: "Severe",
  rarity: "Very Rare",
  description: "Can only produce limited sounds.",
  inheritanceGroup: "vocal"
},

{
  name: "Mute",
  category: "Vocal",
  severity: "Severe",
  rarity: "Rare",
  description: "Cannot use vocal calls at all.",
  inheritanceGroup: "vocal"
},

{
  name: "Permanent Vocal Loss",
  category: "Vocal",
  severity: "Extreme",
  rarity: "Extremely Rare",
  description: "Cannot produce any vocal sounds.",
  inheritanceGroup: "vocal"
},
/* =========================
   🌱 GROWTH SYSTEM
========================= */

{
  name: "Rapid Growth",
  category: "Growth",
  severity: "mild",
  rarity: "Uncommon",
  description: "Grows quickly through life stages and reaches maturity faster.",
  inheritanceGroup: "growth"
},

{
  name: "Robust Build",
  category: "Growth",
  severity: "Positive",
  rarity: "Rare",
  description: "Naturally develops a stronger physical structure.",
  inheritanceGroup: "growth"
},

{
  name: "Delayed Growth",
  category: "Growth",
  severity: "Mild",
  rarity: "Common",
  description: "Grows slower than normal but eventually reaches adulthood.",
  inheritanceGroup: "growth"
},

{
  name: "Small Frame",
  category: "Growth",
  severity: "Mild",
  rarity: "Common",
  description: "Naturally smaller than average while remaining healthy.",
  inheritanceGroup: "growth"
},

{
  name: "Late Maturity",
  category: "Growth",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Reaches adult development slower than others.",
  inheritanceGroup: "growth"
},

{
  name: "Dwarfism",
  category: "Growth",
  severity: "Moderate",
  rarity: "Rare",
  description: "Growth stops before the adult stage.",
  inheritanceGroup: "growth"
},

{
  name: "Gigantism",
  category: "Growth",
  severity: "Moderate",
  rarity: "Rare",
  description: "Grows significantly larger than average and may need additional food and space.",
  inheritanceGroup: "growth"
},

{
  name: "Stunted Development",
  category: "Growth",
  severity: "Severe",
  rarity: "Very Rare",
  description: "Multiple growth stages are affected.",
  inheritanceGroup: "growth"
},

{
  name: "Tiny Dwarf",
  category: "Growth",
  severity: "Severe",
  rarity: "Very Rare",
  description: "Growth stops around fresh sub-adult stage, resulting in an extremely small size.",
  inheritanceGroup: "growth"
},


/* =========================
   🫀 CIRCULATORY SYSTEM
========================= */

{
  name: "Low Stamina Circulation",
  category: "Circulatory",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Tires more quickly because the body circulates oxygen less efficiently.",
  inheritanceGroup: "circulatory"
},

{
  name: "Cold Extremities",
  category: "Circulatory",
  severity: "Mild",
  rarity: "Uncommon",
  description: "Struggles maintaining warmth in colder environments.",
  inheritanceGroup: "circulatory"
},

{
  name: "Poor Circulation",
  category: "Circulatory",
  severity: "Moderate",
  rarity: "Rare",
  description: "Recovery after activity is slower.",
  inheritanceGroup: "circulatory"
},

{
  name: "Blood Pressure Instability",
  category: "Circulatory",
  severity: "Moderate",
  rarity: "Very Rare",
  description: "Heavy exertion may cause weakness, discomfort, or exhaustion.",
  inheritanceGroup: "circulatory"
},

{
  name: "High Blood Pressure",
  category: "Circulatory",
  severity: "Moderate",
  rarity: "Very Rare",
  description: "Overexertion can cause episodes of weakness and requires careful pacing.",
  inheritanceGroup: "circulatory"
},

{
  name: "Circulatory Weakness",
  category: "Circulatory",
  severity: "Severe",
  rarity: "Extremely Rare",
  description: "Body struggles maintaining normal circulation.",
  inheritanceGroup: "circulatory"
},


/* =========================
   ☠️ CRITICAL / EXTREME CONDITIONS
========================= */

{
  name: "Failure to Thrive",
  category: "Critical",
  severity: "Extreme",
  rarity: "Extremely Rare",
  description: "Struggles to grow, gain strength, or maintain health. Requires significant RP care.",
  inheritanceGroup: "critical"
},

{
  name: "Sensitive Skin",
  category: "Sensory",
  severity: "Mild",
  rarity: "mild",
  description: "Skin is more sensitive and prone to irritation.",
  inheritanceGroup: "Sensory"
}
];

module.exports = { birthConditions };
