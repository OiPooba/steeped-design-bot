const personalities = [

  // 🌿 POSITIVE

{
  name: "Brave",
  description: "Faces fears without hesitation.",
  category: "positive",
  traits: {
    morality: 1,
    social: 0,
    courage: 5,
    intelligence: 0,
    ambition: 1,
    activity: 2,
    confidence: 3,
    emotionality: -1,
    empathy: 1,
    curiosity: 0,
    independence: 1,
    loyalty: 1,
    reason: 2,
    comedy: -1
  }
},

{
  name: "Smart",
  description: "Quick thinker and fast learner.",
  category: "positive",
  traits: {
    morality: 0,
    social: -1,
    courage: 0,
    intelligence: 5,
    ambition: 2,
    activity: 1,
    confidence: 1,
    emotionality: -1,
    empathy: 0,
    curiosity: 3,
    independence: 1,
    loyalty: 0,
    reason: 4,
    comedy: -1
  }
},

{
  name: "Respectful",
  description: "Listens to others and honors them.",
  category: "positive",
  traits: {
    morality: 4,
    social: 2,
    courage: 0,
    intelligence: 1,
    ambition: -1,
    activity: 0,
    confidence: 0,
    emotionality: 1,
    empathy: 3,
    curiosity: 0,
    independence: -1,
    loyalty: 3,
    reason: 2,
    comedy: -1
  }
},

{
  name: "Nice",
  description: "Kind and pleasant to others.",
  category: "positive",
  traits: {
    morality: 3,
    social: 3,
    courage: 0,
    intelligence: 0,
    ambition: -1,
    activity: 1,
    confidence: 0,
    emotionality: 2,
    empathy: 4,
    curiosity: 0,
    independence: -1,
    loyalty: 1,
    reason: 1,
    comedy: 1
  }
},

{
  name: "Adaptable",
  description: "Adjusts easily to new situations.",
  category: "positive",
  traits: {
    morality: 0,
    social: 1,
    courage: 2,
    intelligence: 2,
    ambition: 1,
    activity: 2,
    confidence: 2,
    emotionality: 0,
    empathy: 1,
    curiosity: 3,
    independence: 2,
    loyalty: 0,
    reason: 2,
    comedy: 0
  }
},

{
  name: "Friendly",
  description: "Making friends comes easy to them.",
  category: "positive",
  traits: {
    morality: 1,
    social: 5,
    courage: 1,
    intelligence: 0,
    ambition: 0,
    activity: 2,
    confidence: 2,
    emotionality: 2,
    empathy: 3,
    curiosity: 1,
    independence: -2,
    loyalty: 1,
    reason: 0,
    comedy: 2
  }
},

{
  name: "Loyal",
  description: "Loyal to those important, will follow them to the end.",
  category: "positive",
  traits: {
    morality: 2,
    social: 1,
    courage: 2,
    intelligence: 0,
    ambition: -1,
    activity: 1,
    confidence: 0,
    emotionality: 2,
    empathy: 2,
    curiosity: -1,
    independence: -2,
    loyalty: 5,
    reason: 2,
    comedy: -1
  }
},

{
  name: "Adventurous",
  description: "Seeks new experiences and places.",
  category: "positive",
  traits: {
    morality: 0,
    social: 1,
    courage: 4,
    intelligence: 1,
    ambition: 2,
    activity: 4,
    confidence: 2,
    emotionality: 1,
    empathy: 0,
    curiosity: 5,
    independence: 2,
    loyalty: 0,
    reason: -1,
    comedy: 1
  }
},

{
  name: "Helpful",
  description: "Finds ways to assist others wherever possible.",
  category: "positive",
  traits: {
    morality: 4,
    social: 2,
    courage: 1,
    intelligence: 1,
    ambition: -1,
    activity: 2,
    confidence: 0,
    emotionality: 2,
    empathy: 4,
    curiosity: 1,
    independence: -1,
    loyalty: 1,
    reason: 2,
    comedy: 0
  }
},

{
  name: "Positive",
  description: "Expects good outcomes regardless what has/will happen.",
  category: "positive",
  traits: {
    morality: 1,
    social: 1,
    courage: 2,
    intelligence: 0,
    ambition: 2,
    activity: 3,
    confidence: 4,
    emotionality: 2,
    empathy: 1,
    curiosity: 1,
    independence: 1,
    loyalty: 0,
    reason: 1,
    comedy: 2
  }
},{
  name: "Caring",
  description: "Looks after others health- physical and emotional.",
  category: "positive",
  traits: {
    morality: 4,
    social: 2,
    courage: 1,
    intelligence: 1,
    ambition: -2,
    activity: 2,
    confidence: -1,
    emotionality: 3,
    empathy: 5,
    curiosity: 0,
    independence: -1,
    loyalty: 2,
    reason: 2,
    comedy: 0
  }
},

{
  name: "Mature",
  description: "Responsible and level headed.",
  category: "positive",
  traits: {
    morality: 2,
    social: 0,
    courage: 1,
    intelligence: 2,
    ambition: 1,
    activity: 2,
    confidence: 1,
    emotionality: -2,
    empathy: 1,
    curiosity: -1,
    independence: 2,
    loyalty: 1,
    reason: 4,
    comedy: -2
  }
},

{
  name: "Resilient",
  description: "Recovers quickly from hardship.",
  category: "positive",
  traits: {
    morality: 1,
    social: -1,
    courage: 4,
    intelligence: 1,
    ambition: 2,
    activity: 3,
    confidence: 2,
    emotionality: -2,
    empathy: 0,
    curiosity: 1,
    independence: 3,
    loyalty: 0,
    reason: 3,
    comedy: -1
  }
},

{
  name: "Eager Learner",
  description: "Actively improves and learns.",
  category: "positive",
  traits: {
    morality: 0,
    social: 0,
    courage: 1,
    intelligence: 3,
    ambition: 4,
    activity: 2,
    confidence: 1,
    emotionality: 0,
    empathy: 0,
    curiosity: 5,
    independence: -1,
    loyalty: 0,
    reason: 3,
    comedy: 0
  }
},

{
  name: "Adaptive Thinker",
  description: "Changes strategy based on situation.",
  category: "positive",
  traits: {
    morality: 0,
    social: -1,
    courage: 1,
    intelligence: 5,
    ambition: 1,
    activity: 1,
    confidence: 2,
    emotionality: -1,
    empathy: 0,
    curiosity: 4,
    independence: 2,
    loyalty: 0,
    reason: 5,
    comedy: -1
  }
},

{
  name: "Observant",
  description: "Notices small details others miss.",
  category: "positive",
  traits: {
    morality: 0,
    social: -2,
    courage: 0,
    intelligence: 5,
    ambition: 1,
    activity: 1,
    confidence: 0,
    emotionality: -1,
    empathy: 1,
    curiosity: 4,
    independence: 2,
    loyalty: 0,
    reason: 4,
    comedy: -2
  }
},

{
  name: "Patient",
  description: "Waits calmly before acting.",
  category: "positive",
  traits: {
    morality: 1,
    social: 0,
    courage: 1,
    intelligence: 1,
    ambition: -1,
    activity: -1,
    confidence: 1,
    emotionality: -2,
    empathy: 2,
    curiosity: 0,
    independence: 2,
    loyalty: 2,
    reason: 5,
    comedy: -2
  }
},

{
  name: "Independent",
  description: "Relies on self.",
  category: "positive",
  traits: {
    morality: 0,
    social: -2,
    courage: 2,
    intelligence: 2,
    ambition: 1,
    activity: 2,
    confidence: 3,
    emotionality: -1,
    empathy: 0,
    curiosity: 1,
    independence: 5,
    loyalty: -2,
    reason: 3,
    comedy: -1
  }
},

{
  name: "Cliff Watcher",
  description: "Prefers high vantage points.",
  category: "neutral",
  traits: {
    morality: 0,
    social: -2,
    courage: 1,
    intelligence: 2,
    ambition: 0,
    activity: 1,
    confidence: 1,
    emotionality: -1,
    empathy: 0,
    curiosity: 2,
    independence: 3,
    loyalty: 1,
    reason: 3,
    comedy: -2
  }
},

{
  name: "Mimic",
  description: "Copies sounds and behaviors.",
  category: "neutral",
  traits: {
    morality: 0,
    social: 2,
    courage: 0,
    intelligence: 3,
    ambition: 0,
    activity: 2,
    confidence: -1,
    emotionality: 1,
    empathy: 2,
    curiosity: 3,
    independence: 1,
    loyalty: -1,
    reason: -2,
    comedy: 3
  }
},
{
  name: "Methodical",
  description: "Careful structured actions.",
  category: "positive",
  traits: {
    morality: 1,
    social: -1,
    courage: 0,
    intelligence: 3,
    ambition: 1,
    activity: 1,
    confidence: 1,
    emotionality: -2,
    empathy: 0,
    curiosity: -1,
    independence: 2,
    loyalty: 1,
    reason: 5,
    comedy: -3
  }
},

{
  name: "Charismatic",
  description: "Naturally draws others in with charm and presence.",
  category: "positive",
  traits: {
    morality: 1,
    social: 5,
    courage: 1,
    intelligence: 1,
    ambition: 1,
    activity: 2,
    confidence: 4,
    emotionality: 1,
    empathy: 2,
    curiosity: 1,
    independence: -1,
    loyalty: 0,
    reason: 1,
    comedy: 2
  }
},

{
  name: "Mediator",
  description: "Naturally resolves conflicts and helps others reach agreements.",
  category: "positive",
  traits: {
    morality: 4,
    social: 4,
    courage: 1,
    intelligence: 2,
    ambition: -1,
    activity: 1,
    confidence: 1,
    emotionality: 2,
    empathy: 5,
    curiosity: 1,
    independence: -1,
    loyalty: 2,
    reason: 4,
    comedy: 0
  }
},

{
  name: "Reflective",
  description: "Thinks carefully about actions and their outcomes.",
  category: "positive",
  traits: {
    morality: 1,
    social: -1,
    courage: 0,
    intelligence: 3,
    ambition: 0,
    activity: 0,
    confidence: -1,
    emotionality: 1,
    empathy: 2,
    curiosity: 3,
    independence: 2,
    loyalty: 1,
    reason: 5,
    comedy: -2
  }
},

{
  name: "Accountable",
  description: "Takes responsibility for actions and outcomes.",
  category: "positive",
  traits: {
    morality: 4,
    social: 1,
    courage: 2,
    intelligence: 1,
    ambition: 1,
    activity: 2,
    confidence: 1,
    emotionality: 0,
    empathy: 1,
    curiosity: 0,
    independence: 0,
    loyalty: 1,
    reason: 4,
    comedy: -2
  }
},

{
  name: "Protective",
  description: "Naturally guards and defends those they care about.",
  category: "positive",
  traits: {
    morality: 3,
    social: 1,
    courage: 4,
    intelligence: 0,
    ambition: 0,
    Activity: 2,
    confidence: 2,
    emotionality: 2,
    empathy: 3,
    curiosity: 0,
    independence: 1,
    loyalty: 5,
    reason: 1,
    comedy: 0
  }
},

{
  name: "Curious",
  description: "Constantly seeks knowledge and new experiences.",
  category: "positive",
  traits: {
    morality: 0,
    social: 0,
    courage: 1,
    intelligence: 2,
    ambition: 1,
    Activity: 1,
    confidence: 1,
    emotionality: 0,
    empathy: 0,
    curiosity: 5,
    independence: 1,
    loyalty: 0,
    reason: 2,
    comedy: 0
  }
},

{
  name: "Reliable",
  description: "Can be counted on to follow through and support others.",
  category: "positive",
  traits: {
    morality: 2,
    social: 1,
    courage: 1,
    intelligence: 0,
    ambition: 1,
    Activity: 2,
    confidence: 1,
    emotionality: 0,
    empathy: 2,
    curiosity: -1,
    independence: 2,
    loyalty: 4,
    reason: 2,
    comedy: 0
  }
}, 

{
  name: "Altruistic",
  description: "Prioritizes the well-being of others above self.",
  category: "neutral",
  traits: {
    morality: 5,
    social: 2,
    courage: 1,
    intelligence: 0,
    ambition: -2,
    activity: 2,
    confidence: -1,
    emotionality: 2,
    empathy: 5,
    curiosity: 0,
    independence: -2,
    loyalty: 2,
    reason: 2,
    comedy: 0
  }
},

{
  name: "Ambitious",
  description: "Strong drive to achieve goals and succeed.",
  category: "positive",
  traits: {
    morality: 0,
    social: 1,
    courage: 2,
    intelligence: 2,
    ambition: 5,
    activity: 4,
    confidence: 3,
    emotionality: -1,
    empathy: -1,
    curiosity: 1,
    independence: 1,
    loyalty: 0,
    reason: 2,
    comedy: -1
  }
},

{
  name: "Authentic",
  description: "True to self, genuine in behavior and expression.",
  category: "positive",
  traits: {
    morality: 3,
    social: 1,
    courage: 2,
    intelligence: 1,
    ambition: 0,
    activity: 1,
    confidence: 3,
    emotionality: 2,
    empathy: 1,
    curiosity: 0,
    independence: 2,
    loyalty: 1,
    reason: 2,
    comedy: 0
  }
},

{
  name: "Calm",
  description: "Remains steady and composed under pressure.",
  category: "positive",
  traits: {
    morality: 1,
    social: 0,
    courage: 1,
    intelligence: 2,
    ambition: 0,
    activity: 0,
    confidence: 2,
    emotionality: -4,
    empathy: 1,
    curiosity: 0,
    independence: 2,
    loyalty: 1,
    reason: 4,
    comedy: -2
  }
},

{
  name: "Compassionate",
  description: "Deeply cares about the suffering of others.",
  category: "positive",
  traits: {
    morality: 4,
    social: 2,
    courage: 1,
    intelligence: 1,
    ambition: -1,
    activity: 2,
    confidence: 0,
    emotionality: 3,
    empathy: 5,
    curiosity: 1,
    independence: 0,
    loyalty: 2,
    reason: 2,
    comedy: 0
  }
},{
  name: "Committed",
  description: "Strong dedication to goals or responsibilities.",
  category: "positive",
  traits: {
    morality: 1,
    social: 0,
    courage: 1,
    intelligence: 1,
    ambition: 2,
    activity: 3,
    confidence: 1,
    emotionality: -1,
    empathy: 0,
    curiosity: -1,
    independence: 2,
    loyalty: 2,
    reason: 4,
    comedy: -2
  }
},

{
  name: "Confident",
  description: "Self-assured and trusts their own abilities.",
  category: "positive",
  traits: {
    morality: 0,
    social: 2,
    courage: 2,
    intelligence: 1,
    ambition: 2,
    activity: 2,
    confidence: 5,
    emotionality: -1,
    empathy: 0,
    curiosity: 0,
    independence: 2,
    loyalty: 0,
    reason: 2,
    comedy: 1
  }
},

{
  name: "Conscientious",
  description: "Careful, detail-focused, and responsible in actions.",
  category: "positive",
  traits: {
    morality: 2,
    social: 0,
    courage: 0,
    intelligence: 2,
    ambition: 1,
    activity: 2,
    confidence: 1,
    emotionality: -1,
    empathy: 1,
    curiosity: 0,
    independence: 2,
    loyalty: 0,
    reason: 5,
    comedy: -3
  }
},

{
  name: "Courageous",
  description: "Acts bravely even in difficult or dangerous situations.",
  category: "positive",
  traits: {
    morality: 1,
    social: 0,
    courage: 5,
    intelligence: 0,
    ambition: 1,
    activity: 3,
    confidence: 3,
    emotionality: -1,
    empathy: 1,
    curiosity: 1,
    independence: 1,
    loyalty: 0,
    reason: 2,
    comedy: -1
  }
},

{
  name: "Creative",
  description: "Thinks in original and imaginative ways.",
  category: "positive",
  traits: {
    morality: 0,
    social: 1,
    courage: 1,
    intelligence: 3,
    ambition: 2,
    activity: 1,
    confidence: 2,
    emotionality: 2,
    empathy: 0,
    curiosity: 5,
    independence: 2,
    loyalty: 0,
    reason: 1,
    comedy: 2
  }
},

{
  name: "Decisive",
  description: "Makes choices quickly and with confidence.",
  category: "positive",
  traits: {
    morality: 1,
    social: 0,
    courage: 3,
    intelligence: 2,
    ambition: 2,
    activity: 3,
    confidence: 4,
    emotionality: -1,
    empathy: 0,
    curiosity: 0,
    independence: 2,
    loyalty: 0,
    reason: 3,
    comedy: -1
  }
},

{
  name: "Dedicated",
  description: "Strong focus and loyalty toward tasks or goals.",
  category: "positive",
  traits: {
    morality: 1,
    social: 0,
    courage: 1,
    intelligence: 1,
    ambition: 2,
    activity: 3,
    confidence: 1,
    emotionality: 0,
    empathy: 0,
    curiosity: -1,
    independence: 1,
    loyalty: 2,
    reason: 4,
    comedy: -2
  }
},

{
  name: "Diligent",
  description: "Careful and persistent in work or effort.",
  category: "positive",
  traits: {
    morality: 2,
    social: 0,
    courage: 1,
    intelligence: 2,
    ambition: 2,
    activity: 4,
    confidence: 1,
    emotionality: -1,
    empathy: 1,
    curiosity: 0,
    independence: 2,
    loyalty: 1,
    reason: 5,
    comedy: -2
  }
},

{
  name: "Diplomatic",
  description: "Handles conflict with care.",
  category: "positive",
  traits: {
    morality: 3,
    social: 3,
    courage: 1,
    intelligence: 3,
    ambition: 0,
    activity: 1,
    confidence: 2,
    emotionality: 1,
    empathy: 4,
    curiosity: 1,
    independence: 0,
    loyalty: 1,
    reason: 5,
    comedy: 0
  }
},

{
  name: "Empathetic",
  description: "Understands and shares the feelings of others.",
  category: "positive",
  traits: {
    morality: 3,
    social: 3,
    courage: 1,
    intelligence: 1,
    ambition: -1,
    activity: 1,
    confidence: 0,
    emotionality: 3,
    empathy: 5,
    curiosity: 1,
    independence: 0,
    loyalty: 2,
    reason: 2,
    comedy: 0
  }
},
{
  name: "Enthusiastic",
  description: "Shows strong excitement and energy.",
  category: "positive",
  traits: {
    morality: 1,
    social: 3,
    courage: 2,
    intelligence: 0,
    ambition: 2,
    activity: 5,
    confidence: 2,
    emotionality: 3,
    empathy: 1,
    curiosity: 2,
    independence: 1,
    loyalty: 1,
    reason: 0,
    comedy: 2
  }
},

{
  name: "Fair",
  description: "Treats others equally and without bias.",
  category: "positive",
  traits: {
    morality: 5,
    social: 1,
    courage: 2,
    intelligence: 2,
    ambition: 0,
    activity: 1,
    confidence: 2,
    emotionality: -1,
    empathy: 3,
    curiosity: 1,
    independence: 1,
    loyalty: 1,
    reason: 5,
    comedy: -1
  }
},

{
  name: "Fearless",
  description: "Shows no fear when facing danger or uncertainty.",
  category: "positive",
  traits: {
    morality: 1,
    social: 0,
    courage: 5,
    intelligence: 0,
    ambition: 2,
    activity: 4,
    confidence: 5,
    emotionality: -2,
    empathy: 0,
    curiosity: 2,
    independence: 3,
    loyalty: 0,
    reason: 1,
    comedy: 0
  }
},

{
  name: "Generous",
  description: "Willing to give and share with others.",
  category: "positive",
  traits: {
    morality: 5,
    social: 2,
    courage: 1,
    intelligence: 0,
    ambition: -1,
    activity: 1,
    confidence: 1,
    emotionality: 2,
    empathy: 4,
    curiosity: 0,
    independence: -1,
    loyalty: 2,
    reason: 2,
    comedy: 1
  }
},

{
  name: "Honest",
  description: "Tells the truth and avoids deception.",
  category: "positive",
  traits: {
    morality: 5,
    social: 1,
    courage: 2,
    intelligence: 1,
    ambition: 0,
    activity: 1,
    confidence: 2,
    emotionality: 0,
    empathy: 2,
    curiosity: 1,
    independence: 1,
    loyalty: 2,
    reason: 4,
    comedy: -1
  }
},

{
  name: "Hopeful",
  description: "Maintains optimism about the future.",
  category: "positive",
  traits: {
    morality: 1,
    social: 1,
    courage: 2,
    intelligence: 0,
    ambition: 2,
    activity: 2,
    confidence: 3,
    emotionality: 2,
    empathy: 1,
    curiosity: 1,
    independence: 1,
    loyalty: 1,
    reason: 1,
    comedy: 2
  }
},

{
  name: "Humble",
  description: "Does not boast and stays modest about abilities.",
  category: "positive",
  traits: {
    morality: 3,
    social: 1,
    courage: 1,
    intelligence: 1,
    ambition: -1,
    activity: 1,
    confidence: 0,
    emotionality: 0,
    empathy: 2,
    curiosity: 1,
    independence: 1,
    loyalty: 1,
    reason: 3,
    comedy: 1
  }
},

{
  name: "Imaginative",
  description: "Has a strong ability to create ideas and concepts.",
  category: "positive",
  traits: {
    morality: 0,
    social: 1,
    courage: 1,
    intelligence: 3,
    ambition: 1,
    activity: 1,
    confidence: 2,
    emotionality: 2,
    empathy: 0,
    curiosity: 5,
    independence: 3,
    loyalty: 0,
    reason: 1,
    comedy: 2
  }
},

{
  name: "Inspiring",
  description: "Motivates others through actions or presence.",
  category: "positive",
  traits: {
    morality: 3,
    social: 4,
    courage: 2,
    intelligence: 2,
    ambition: 2,
    activity: 3,
    confidence: 4,
    emotionality: 1,
    empathy: 3,
    curiosity: 1,
    independence: 1,
    loyalty: 1,
    reason: 3,
    comedy: 1
  }
},

{
  name: "Intuitive",
  description: "Understands things instinctively without reasoning.",
  category: "positive",
  traits: {
    morality: 1,
    social: 1,
    courage: 1,
    intelligence: 4,
    ambition: 0,
    activity: 1,
    confidence: 2,
    emotionality: 1,
    empathy: 2,
    curiosity: 3,
    independence: 2,
    loyalty: 1,
    reason: 3,
    comedy: 0
  }
},{
  name: "Objective",
  description: "Makes judgments based on facts rather than emotion.",
  category: "positive",
  traits: {
    morality: 1,
    social: -1,
    courage: 1,
    intelligence: 4,
    ambition: 1,
    activity: 1,
    confidence: 1,
    emotionality: -3,
    empathy: 0,
    curiosity: 2,
    independence: 2,
    loyalty: 0,
    reason: 5,
    comedy: -3
  }
},

{
  name: "Open-minded",
  description: "Willing to consider new ideas and perspectives.",
  category: "positive",
  traits: {
    morality: 2,
    social: 2,
    courage: 1,
    intelligence: 2,
    ambition: 0,
    activity: 1,
    confidence: 1,
    emotionality: 1,
    empathy: 3,
    curiosity: 5,
    independence: 1,
    loyalty: 0,
    reason: 3,
    comedy: 1
  }
},

{
  name: "Persevering",
  description: "Continues efforts despite difficulty or setbacks.",
  category: "positive",
  traits: {
    morality: 1,
    social: 0,
    courage: 4,
    intelligence: 1,
    ambition: 3,
    activity: 4,
    confidence: 2,
    emotionality: -1,
    empathy: 0,
    curiosity: 1,
    independence: 3,
    loyalty: 1,
    reason: 4,
    comedy: -1
  }
},

{
  name: "Resourceful",
  description: "Finds clever ways to overcome challenges.",
  category: "positive",
  traits: {
    morality: 0,
    social: 0,
    courage: 2,
    intelligence: 4,
    ambition: 2,
    activity: 3,
    confidence: 2,
    emotionality: 0,
    empathy: 0,
    curiosity: 4,
    independence: 4,
    loyalty: 0,
    reason: 4,
    comedy: 1
  }
},

{
  name: "Witty",
  description: "Quick with clever humor or remarks.",
  category: "positive",
  traits: {
    morality: 0,
    social: 3,
    courage: 1,
    intelligence: 3,
    ambition: 0,
    activity: 2,
    confidence: 2,
    emotionality: 1,
    empathy: 1,
    curiosity: 2,
    independence: 1,
    loyalty: 0,
    reason: 2,
    comedy: 5
  }
},

{
  name: "Visionary",
  description: "Sees possibilities beyond the present.",
  category: "positive",
  traits: {
    morality: 1,
    social: 1,
    courage: 3,
    intelligence: 4,
    ambition: 4,
    activity: 2,
    confidence: 3,
    emotionality: 1,
    empathy: 1,
    curiosity: 5,
    independence: 3,
    loyalty: 0,
    reason: 3,
    comedy: 1
  }
},

{
  name: "Inventive",
  description: "Creates new ideas and solutions.",
  category: "positive",
  traits: {
    morality: 0,
    social: 0,
    courage: 2,
    intelligence: 4,
    ambition: 2,
    activity: 2,
    confidence: 2,
    emotionality: 1,
    empathy: 0,
    curiosity: 5,
    independence: 3,
    loyalty: 0,
    reason: 2,
    comedy: 2
  }
},

{
  name: "Experimental",
  description: "Tries new and unusual approaches.",
  category: "positive",
  traits: {
    morality: 0,
    social: 1,
    courage: 3,
    intelligence: 3,
    ambition: 1,
    activity: 3,
    confidence: 2,
    emotionality: 1,
    empathy: 0,
    curiosity: 5,
    independence: 2,
    loyalty: 0,
    reason: -1,
    comedy: 2
  }
},

{
  name: "Artistic",
  description: "Expresses ideas through creative forms.",
  category: "positive",
  traits: {
    morality: 1,
    social: 1,
    courage: 1,
    intelligence: 3,
    ambition: 1,
    activity: 1,
    confidence: 2,
    emotionality: 4,
    empathy: 1,
    curiosity: 4,
    independence: 2,
    loyalty: 0,
    reason: 1,
    comedy: 2
  }
},

{
  name: "Innovative",
  description: "Introduces new and original methods.",
  category: "positive",
  traits: {
    morality: 0,
    social: 0,
    courage: 3,
    intelligence: 5,
    ambition: 3,
    activity: 2,
    confidence: 3,
    emotionality: 0,
    empathy: 0,
    curiosity: 5,
    independence: 3,
    loyalty: 0,
    reason: 3,
    comedy: 1
  }
},  {
    name: "Dreamer",
    description: "Lives in imagination and possibilities.",
    category: "positive",
    traits: {
      morality: 0,
      social: 0,
      courage: 0,
      intelligence: 1,
      ambition: 1,
      Activity: -1,
      confidence: 1,
      emotionality: 3,
      empathy: 0,
      curiosity: 5,
      independence: 1,
      loyalty: 0,
      reason: -1,
      comedy: 0
    }
  },

  {
    name: "Expressive",
    description: "Communicates thoughts and emotions creatively.",
    category: "positive",
    traits: {
      morality: 0,
      social: 3,
      courage: 1,
      intelligence: 0,
      ambition: 0,
      Activity: 1,
      confidence: 2,
      emotionality: 5,
      empathy: 1,
      curiosity: 1,
      independence: 0,
      loyalty: 0,
      reason: -1,
      comedy: 1
    }
  },

  {
    name: "Conceptual Thinker",
    description: "Understands and builds abstract ideas.",
    category: "positive",
    traits: {
      morality: 0,
      social: -1,
      courage: 0,
      intelligence: 5,
      ambition: 1,
      Activity: -1,
      confidence: 1,
      emotionality: 0,
      empathy: 0,
      curiosity: 4,
      independence: 2,
      loyalty: 0,
      reason: 2,
      comedy: 0
    }
  },

  {
    name: "Affectionate",
    description: "Openly shows warmth and care toward others.",
    category: "positive",
    traits: {
      morality: 1,
      social: 2,
      courage: 0,
      intelligence: 0,
      ambition: 0,
      Activity: 0,
      confidence: 0,
      emotionality: 3,
      empathy: 4,
      curiosity: 0,
      independence: -1,
      loyalty: 1,
      reason: 0,
      comedy: 0
    }
  },

  {
    name: "Romantic",
    description: "Strongly drawn to emotional and heartfelt bonds.",
    category: "positive",
    traits: {
      morality: 0,
      social: 2,
      courage: 0,
      intelligence: 0,
      ambition: 0,
      Activity: 0,
      confidence: 0,
      emotionality: 5,
      empathy: 2,
      curiosity: 0,
      independence: -1,
      loyalty: 1,
      reason: -1,
      comedy: 0
    }
  },

  {
    name: "Tender-Hearted",
    description: "Soft and emotionally sensitive toward loved ones.",
    category: "positive",
    traits: {
      morality: 1,
      social: 1,
      courage: -1,
      intelligence: 0,
      ambition: 0,
      Activity: 0,
      confidence: -1,
      emotionality: 4,
      empathy: 5,
      curiosity: 0,
      independence: 0,
      loyalty: 1,
      reason: 0,
      comedy: 0
    }
  },

  {
    name: "Bonded",
    description: "Forms deep emotional connections with others.",
    category: "positive",
    traits: {
      morality: 1,
      social: 2,
      courage: 0,
      intelligence: 0,
      ambition: 0,
      Activity: 0,
      confidence: 0,
      emotionality: 2,
      empathy: 3,
      curiosity: 0,
      independence: -1,
      loyalty: 5,
      reason: 0,
      comedy: 0
    }
  },

  {
    name: "Heartfelt",
    description: "Expresses emotions sincerely and deeply.",
    category: "positive",
    traits: {
      morality: 2,
      social: 1,
      courage: 0,
      intelligence: 0,
      ambition: 0,
      Activity: 0,
      confidence: 1,
      emotionality: 5,
      empathy: 3,
      curiosity: 0,
      independence: 0,
      loyalty: 0,
      reason: -1,
      comedy: 0
    }
  },

  {
    name: "Benevolent",
    description: "Naturally kind and generous toward others.",
    category: "positive",
    traits: {
      morality: 5,
      social: 1,
      courage: 1,
      intelligence: 0,
      ambition: -1,
      Activity: 0,
      confidence: 0,
      emotionality: 1,
      empathy: 4,
      curiosity: 0,
      independence: 0,
      loyalty: 1,
      reason: 0,
      comedy: 0
    }
  },

  {
    name: "Noble",
    description: "Acts with dignity and moral excellence.",
    category: "positive",
    traits: {
      morality: 5,
      social: 0,
      courage: 2,
      intelligence: 0,
      ambition: 1,
      Activity: 0,
      confidence: 2,
      emotionality: 0,
      empathy: 2,
      curiosity: 0,
      independence: 1,
      loyalty: 1,
      reason: 1,
      comedy: 0
    }
  },

  {
    name: "Sincere",
    description: "Honest in feelings and intentions.",
    category: "positive",
    traits: {
      morality: 4,
      social: 1,
      courage: 1,
      intelligence: 0,
      ambition: 0,
      Activity: 0,
      confidence: 1,
      emotionality: 2,
      empathy: 2,
      curiosity: 0,
      independence: 0,
      loyalty: 1,
      reason: 1,
      comedy: 0
    }
  },

  {
    name: "Magnanimous",
    description: "Generous and forgiving, especially to enemies.",
    category: "positive",
    traits: {
      morality: 5,
      social: 1,
      courage: 2,
      intelligence: 0,
      ambition: -1,
      Activity: 0,
      confidence: 2,
      emotionality: 1,
      empathy: 4,
      curiosity: 0,
      independence: 0,
      loyalty: 0,
      reason: 1,
      comedy: 0
    }
  },

  // ⚖️ NEUTRAL
    // ⚖️ NEUTRAL
{
  name: "Quiet",
  description: "Speaks little and prefers observing over leading conversations.",
  category: "neutral",
  traits: {
    morality: 0,
    social: -3,
    courage: 0,
    intelligence: 1,
    ambition: 0,
    Activity: -1,
    confidence: 0,
    emotionality: -1,
    empathy: 1,
    curiosity: 1,
    independence: 2,
    loyalty: 1,
    reason: 2,
    comedy: -1
  }
},

  {
    name: "Sun-Lover",
    description: "Enjoys warmth and sunlight so much it becomes a part of their personality.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: 0,
      intelligence: 0,
      ambition: 0,
      Activity: 1,
      confidence: 1,
      emotionality: 1,
      empathy: 0,
      curiosity: 0,
      independence: 1,
      loyalty: 0,
      reason: 0,
      comedy: 0
    }
  },

  {
    name: "Intense Thunder Fear",
    description: "Upon the sound of thunder, these individuals are known to bolt and are incredibly anxious.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: -4,
      intelligence: 0,
      ambition: 0,
      Activity: 1,
      confidence: -2,
      emotionality: 2,
      empathy: 0,
      curiosity: 0,
      independence: 0,
      loyalty: 0,
      reason: 0,
      comedy: 0
    }
  },

  {
    name: "Aquatic-Lover",
    description: "Drawn to water environments regardless of experiences.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: 1,
      intelligence: 0,
      ambition: 0,
      Activity: 1,
      confidence: 1,
      emotionality: 1,
      empathy: 0,
      curiosity: 2,
      independence: 1,
      loyalty: 0,
      reason: 0,
      comedy: 0
    }
  },

  {
    name: "Mud Enthusiast",
    description: "Enjoys muddy terrain.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: 1,
      intelligence: 0,
      ambition: 0,
      Activity: 1,
      confidence: 1,
      emotionality: 0,
      empathy: 0,
      curiosity: 2,
      independence: 1,
      loyalty: 0,
      reason: 0,
      comedy: 1
    }
  },

  {
    name: "Shade Seeker",
    description: "Loves anywhere shady or cool, avoids sunlight.",
    category: "neutral",
    traits: {
      morality: 0,
      social: -1,
      courage: 0,
      intelligence: 0,
      ambition: -1,
      Activity: -1,
      confidence: 0,
      emotionality: 1,
      empathy: 0,
      curiosity: 1,
      independence: 2,
      loyalty: 0,
      reason: 1,
      comedy: 0
    }
  },

  {
    name: "Forest Walker",
    description: "Wherever, whenever, forever, walking in the forest or bushes.",
    category: "neutral",
    traits: {
      morality: 0,
      social: -1,
      courage: 1,
      intelligence: 0,
      ambition: 0,
      Activity: 2,
      confidence: 1,
      emotionality: 0,
      empathy: 0,
      curiosity: 3,
      independence: 1,
      loyalty: 0,
      reason: 0,
      comedy: 0
    }
  },

  {
    name: "Studier",
    description: "Often can be found observing others, even other species, curiously.",
    category: "neutral",
    traits: {
      morality: 0,
      social: -1,
      courage: 0,
      intelligence: 2,
      ambition: 0,
      Activity: -1,
      confidence: 0,
      emotionality: 0,
      empathy: 1,
      curiosity: 5,
      independence: 1,
      loyalty: 0,
      reason: 2,
      comedy: 0
    }
  },  {
    name: "Grounded",
    description: "Stable and realistic.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: 0,
      intelligence: 1,
      ambition: 0,
      Activity: 0,
      confidence: 1,
      emotionality: -1,
      empathy: 0,
      curiosity: -1,
      independence: 1,
      loyalty: 0,
      reason: 4,
      comedy: 0
    }
  },

  {
    name: "Cautious Learner",
    description: "Learns slowly but carefully.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: -1,
      intelligence: 2,
      ambition: 0,
      Activity: -1,
      confidence: -1,
      emotionality: 0,
      empathy: 0,
      curiosity: 2,
      independence: 0,
      loyalty: 0,
      reason: 4,
      comedy: 0
    }
  },

  {
    name: "Playful",
    description: "Enjoys fun and light behavior.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 2,
      courage: 1,
      intelligence: 0,
      ambition: 0,
      Activity: 3,
      confidence: 1,
      emotionality: 1,
      empathy: 0,
      curiosity: 1,
      independence: 0,
      loyalty: 0,
      reason: -1,
      comedy: 3
    }
  },

  {
    name: "Careful",
    description: "Acts cautiously and thinks ahead.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: -1,
      intelligence: 1,
      ambition: 0,
      Activity: -1,
      confidence: 0,
      emotionality: 0,
      empathy: 0,
      curiosity: 0,
      independence: 1,
      loyalty: 0,
      reason: 4,
      comedy: 0
    }
  },

  {
    name: "Reserved",
    description: "Keeps thoughts private, has a harder time connecting and opening up.",
    category: "neutral",
    traits: {
      morality: 0,
      social: -4,
      courage: -1,
      intelligence: 1,
      ambition: 0,
      Activity: -1,
      confidence: -1,
      emotionality: -1,
      empathy: 1,
      curiosity: 0,
      independence: 2,
      loyalty: 0,
      reason: 2,
      comedy: 0
    }
  },

  {
    name: "Passive",
    description: "Rarely takes initiative and rarely has strong feelings or desires, just floats about.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: -1,
      intelligence: 0,
      ambition: -4,
      Activity: -4,
      confidence: -1,
      emotionality: 0,
      empathy: 0,
      curiosity: 0,
      independence: -1,
      loyalty: 0,
      reason: 1,
      comedy: 0
    }
  },

  {
    name: "Wanderer",
    description: "Moves between places frequently, has a harder time setting down roots.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: 1,
      intelligence: 0,
      ambition: 0,
      Activity: 3,
      confidence: 1,
      emotionality: 0,
      empathy: 0,
      curiosity: 4,
      independence: 2,
      loyalty: -2,
      reason: -1,
      comedy: 0
    }
  },

  {
    name: "Collector",
    description: "Gathers objects, friends, and... other creatures?.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 1,
      courage: 0,
      intelligence: 1,
      ambition: 0,
      Activity: 1,
      confidence: 0,
      emotionality: 1,
      empathy: 1,
      curiosity: 4,
      independence: 0,
      loyalty: 1,
      reason: 0,
      comedy: 1
    }
  },

  {
    name: "Sentimental",
    description: "Attached to memories, looks fondly upon those close to them.",
    category: "neutral",
    traits: {
      morality: 1,
      social: 1,
      courage: 0,
      intelligence: 0,
      ambition: 0,
      Activity: 0,
      confidence: 0,
      emotionality: 4,
      empathy: 2,
      curiosity: 0,
      independence: -1,
      loyalty: 3,
      reason: 0,
      comedy: 0
    }
  },

  {
    name: "Dependent Thinker",
    description: "Relies on others for decisions, can't make their own choices.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 2,
      courage: -2,
      intelligence: 0,
      ambition: -1,
      Activity: 0,
      confidence: -4,
      emotionality: 1,
      empathy: 1,
      curiosity: 0,
      independence: -5,
      loyalty: 1,
      reason: 1,
      comedy: 0
    }
  },  {
    name: "Talkative",
    description: "Speaks frequently... too frequently... earplugs anyone?",
    category: "neutral",
    traits: {
      morality: 0,
      social: 4,
      courage: 0,
      intelligence: 0,
      ambition: 0,
      Activity: 1,
      confidence: 2,
      emotionality: 1,
      empathy: 1,
      curiosity: 1,
      independence: 0,
      loyalty: 0,
      reason: -1,
      comedy: 2
    }
  },

  {
    name: "Unpredictable",
    description: "Behavior changes often... is there any meaning to the chaos of their actions?",
    category: "neutral",
    traits: {
      morality: 0,
      social: 1,
      courage: 1,
      intelligence: 0,
      ambition: 0,
      Activity: 2,
      confidence: 1,
      emotionality: 1,
      empathy: 0,
      curiosity: 2,
      independence: 1,
      loyalty: 0,
      reason: -5,
      comedy: 1
    }
  },

  {
    name: "Absent-Minded",
    description: "Easily distracted... squirrel",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: 0,
      intelligence: 1,
      ambition: -1,
      Activity: 0,
      confidence: 0,
      emotionality: 0,
      empathy: 0,
      curiosity: 3,
      independence: 1,
      loyalty: 0,
      reason: -3,
      comedy: 2
    }
  },

  {
    name: "Oddly Calm",
    description: "Calm even in strange situations... you realize they just died? right? you were just bit? right???",
    category: "neutral",
    traits: {
      morality: 0,
      social: -1,
      courage: 2,
      intelligence: 0,
      ambition: 0,
      Activity: -1,
      confidence: 2,
      emotionality: -5,
      empathy: 0,
      curiosity: 1,
      independence: 1,
      loyalty: 0,
      reason: -2,
      comedy: 2
    }
  },

  {
    name: "Stoic",
    description: "Shows little emotion, even under pressure.",
    category: "neutral",
    traits: {
      morality: 0,
      social: -1,
      courage: 2,
      intelligence: 1,
      ambition: 0,
      Activity: 0,
      confidence: 2,
      emotionality: -5,
      empathy: 0,
      curiosity: 0,
      independence: 2,
      loyalty: 0,
      reason: 2,
      comedy: -1
    }
  },

  {
    name: "Cautious",
    description: "Avoids risk.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: -3,
      intelligence: 1,
      ambition: 0,
      Activity: -1,
      confidence: -1,
      emotionality: 0,
      empathy: 0,
      curiosity: 0,
      independence: 1,
      loyalty: 0,
      reason: 4,
      comedy: 0
    }
  },

  {
    name: "Philosophical",
    description: "Thinks deeply.",
    category: "neutral",
    traits: {
      morality: 1,
      social: -1,
      courage: 0,
      intelligence: 4,
      ambition: 0,
      Activity: -1,
      confidence: 1,
      emotionality: 1,
      empathy: 1,
      curiosity: 3,
      independence: 1,
      loyalty: 0,
      reason: 3,
      comedy: -1
    }
  },

  {
    name: "Energetic Rambler",
    description: "Always moving... always talking... always..",
    category: "neutral",
    traits: {
      morality: 0,
      social: 4,
      courage: 1,
      intelligence: 0,
      ambition: 0,
      Activity: 5,
      confidence: 1,
      emotionality: 1,
      empathy: 0,
      curiosity: 1,
      independence: 0,
      loyalty: 0,
      reason: -2,
      comedy: 2
    }
  },

  {
    name: "Showboat",
    description: "Seeks attention and always is flaunting.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 2,
      courage: 1,
      intelligence: 0,
      ambition: 3,
      Activity: 1,
      confidence: 5,
      emotionality: 1,
      empathy: -1,
      curiosity: 0,
      independence: 1,
      loyalty: 0,
      reason: 0,
      comedy: 1
    }
  },

  {
    name: "Jumpy",
    description: "Startles easily.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 0,
      courage: -4,
      intelligence: 0,
      ambition: 0,
      Activity: 1,
      confidence: -2,
      emotionality: 3,
      empathy: 0,
      curiosity: 0,
      independence: 0,
      loyalty: 0,
      reason: 1,
      comedy: 0
    }
  },  {
    name: "Timid Shadow",
    description: "Avoids attention, avoids eye contact, tries to blend into nothingness.",
    category: "neutral",
    traits: {
      morality: 0,
      social: -4,
      courage: -3,
      intelligence: 0,
      ambition: 0,
      Activity: -1,
      confidence: -4,
      emotionality: 2,
      empathy: 1,
      curiosity: 0,
      independence: 1,
      loyalty: 1,
      reason: 1,
      comedy: 0
    }
  },

  {
    name: "Social Butterfly",
    description: "Bonds easily, always making new friends.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 5,
      courage: 1,
      intelligence: 0,
      ambition: 0,
      Activity: 2,
      confidence: 2,
      emotionality: 2,
      empathy: 2,
      curiosity: 1,
      independence: -1,
      loyalty: 0,
      reason: -1,
      comedy: 1
    }
  },

  {
    name: "Trickster",
    description: "Playful chaos.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 2,
      courage: 1,
      intelligence: 2,
      ambition: 0,
      Activity: 2,
      confidence: 2,
      emotionality: 1,
      empathy: 0,
      curiosity: 2,
      independence: 1,
      loyalty: -1,
      reason: -4,
      comedy: 5
    }
  },

  {
    name: "Goofy",
    description: "Silly behavior.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 2,
      courage: 1,
      intelligence: 0,
      ambition: -1,
      Activity: 2,
      confidence: 1,
      emotionality: 2,
      empathy: 0,
      curiosity: 1,
      independence: 0,
      loyalty: 0,
      reason: -2,
      comedy: 5
    }
  },

  {
    name: "Friendly Rival",
    description: "Competitive but friendly.",
    category: "neutral",
    traits: {
      morality: 1,
      social: 2,
      courage: 1,
      intelligence: 0,
      ambition: 4,
      Activity: 2,
      confidence: 2,
      emotionality: 0,
      empathy: 1,
      curiosity: 0,
      independence: 1,
      loyalty: 0,
      reason: 1,
      comedy: 1
    }
  },

  {
    name: "Withdrawn",
    description: "Avoids interaction.",
    category: "neutral",
    traits: {
      morality: 0,
      social: -5,
      courage: 0,
      intelligence: 1,
      ambition: -1,
      Activity: -1,
      confidence: -2,
      emotionality: -1,
      empathy: 0,
      curiosity: 0,
      independence: 2,
      loyalty: 0,
      reason: 2,
      comedy: -1
    }
  },

  {
    name: "Competitive",
    description: "Constantly compares self.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 1,
      courage: 2,
      intelligence: 1,
      ambition: 5,
      Activity: 2,
      confidence: 2,
      emotionality: 0,
      empathy: -1,
      curiosity: 0,
      independence: 1,
      loyalty: 0,
      reason: 1,
      comedy: 0
    }
  },

  {
    name: "Defensive",
    description: "Quick to react or protect themselves when feeling threatened.",
    category: "neutral",
    traits: {
      morality: 0,
      social: -1,
      courage: 2,
      intelligence: 0,
      ambition: 0,
      Activity: 1,
      confidence: 1,
      emotionality: 2,
      empathy: 0,
      curiosity: 0,
      independence: 2,
      loyalty: 1,
      reason: -2,
      comedy: 0
    }
  },

  {
    name: "Overprotective",
    description: "Guards others excessively, sometimes limiting their freedom.",
    category: "neutral",
    traits: {
      morality: 1,
      social: 1,
      courage: 2,
      intelligence: 0,
      ambition: 0,
      Activity: 0,
      confidence: 1,
      emotionality: 2,
      empathy: 2,
      curiosity: 0,
      independence: -1,
      loyalty: 5,
      reason: 0,
      comedy: 0
    }
  },

  {
    name: "Curmudgeon",
    description: "Grumpy and easily annoyed, but not truly harmful.",
    category: "neutral",
    traits: {
      morality: 0,
      social: -2,
      courage: 0,
      intelligence: 1,
      ambition: 0,
      Activity: -1,
      confidence: 1,
      emotionality: -2,
      empathy: 0,
      curiosity: -1,
      independence: 2,
      loyalty: 0,
      reason: 2,
      comedy: 1
    }
  },

  {
    name: "Sassy",
    description: "Responds with attitude and playful sarcasm.",
    category: "neutral",
    traits: {
      morality: 0,
      social: 2,
      courage: 1,
      intelligence: 1,
      ambition: 0,
      Activity: 1,
      confidence: 3,
      emotionality: 1,
      empathy: 0,
      curiosity: 0,
      independence: 1,
      loyalty: 0,
      reason: -1,
      comedy: 4
    }
  },// ⚖️ NEUTRAL — Nature Preferences

// ⚖️ NEUTRAL

{
  name: "Natural Performer",
  description: "Enjoys expressing themselves and being noticed by others.",
  category: "neutral",
  traits: {
    social: 4,
    confidence: 4,
    comedy: 2,
    emotionality: 2,
    independence: 1,
    reason: 2
  }
},

{
  name: "Caretaker",
  description: "Naturally looks after those around them and their surroundings.",
  category: "neutral",
  traits: {
    empathy: 5,
    loyalty: 3,
    Activity: 2,
    social: 2,
    independence: -1
  }
},

{
  name: "Problem Solver",
  description: "Enjoys finding solutions and understanding difficult situations.",
  category: "neutral",
  traits: {
    intelligence: 5,
    reason: 4,
    curiosity: 3,
    social: -1,
    Activity: 2
  }
},

{
  name: "Risk Assessor",
  description: "Carefully considers possible outcomes before acting.",
  category: "neutral",
  traits: {
    reason: 5,
    intelligence: 3,
    courage: -2,
    confidence: 1,
    Activity: -2
  }
},

{
  name: "Instinct Driven",
  description: "Trusts feelings and reactions more than careful planning.",
  category: "neutral",
  traits: {
    reason: -5,
    courage: 3,
    curiosity: 3,
    emotionality: 2,
    intelligence: -2
  }
},

{
  name: "Balanced Mind",
  description: "Attempts to balance emotions, logic, and action.",
  category: "neutral",
  traits: {
    reason: 4,
    emotionality: 3,
    confidence: 2,
    empathy: 2,
    curiosity: 1
  }
},

{
  name: "Sensitive Spirit",
  description: "Feels emotions strongly and notices subtle changes around them.",
  category: "neutral",
  traits: {
    emotionality: 5,
    empathy: 4,
    curiosity: 2,
    confidence: -2,
    reason: -1
  }
},

{
  name: "Hard Shell",
  description: "Keeps emotions hidden and rarely reveals vulnerability.",
  category: "neutral",
  traits: {
    emotionality: -5,
    confidence: 3,
    independence: 3,
    loyalty: 2,
    empathy: -1
  }
},

{
  name: "Reliable",
  description: "Can usually be counted on when needed.",
  category: "neutral",
  traits: {
    loyalty: 5,
    Activity: 3,
    confidence: 2,
    discipline: 2,
    independence: 1
  }
},

{
  name: "Curious Hands",
  description: "Learns by interacting, testing, and exploring.",
  category: "neutral",
  traits: {
    curiosity: 5,
    Activity: 4,
    reason: -2,
    intelligence: 2,
    discipline: -1
  }
},

{
  name: "Deep Thinker",
  description: "Spends time analyzing ideas and possibilities.",
  category: "neutral",
  traits: {
    intelligence: 5,
    reason: 4,
    curiosity: 3,
    social: -2,
    Activity: -1
  }
},

{
  name: "Memory Keeper",
  description: "Places importance on experiences and meaningful moments.",
  category: "neutral",
  traits: {
    emotionality: 4,
    loyalty: 4,
    curiosity: 2,
    empathy: 2,
    reason: -1
  }
},

{
  name: "Easygoing",
  description: "Takes situations as they come without much stress.",
  category: "neutral",
  traits: {
    confidence: 3,
    reason: 2,
    emotionality: 2,
    Activity: -1,
    curiosity: 2,
    discipline: -1
  }
},

{
  name: "Focused",
  description: "Becomes absorbed in tasks and goals.",
  category: "neutral",
  traits: {
    ambition: 4,
    Activity: 4,
    intelligence: 2,
    social: -2,
    curiosity: 1
  }
},

{
  name: "Distracted",
  description: "Attention is easily pulled toward new things.",
  category: "neutral",
  traits: {
    curiosity: 5,
    Activity: 3,
    reason: -3,
    discipline: -2,
    comedy: 2
  }
},
// ⚖️ NEUTRAL — NATURE PREFERENCES

{
  name: "Leaf Collector",
  description: "Collects natural objects and treasures small pieces of the world.",
  category: "neutral",
  traits: {
    curiosity: 5,
    emotionality: 3,
    independence: 2,
    Activity: 2,
    social: 3
  }
},

{
  name: "Wind Runner",
  description: "Loves open air, strong breezes, and moving freely.",
  category: "neutral",
  traits: {
    Activity: 5,
    independence: 4,
    curiosity: 3,
    confidence: 3
  }
},

{
  name: "Sunset Watcher",
  description: "Enjoys peaceful moments watching the day fade away.",
  category: "neutral",
  traits: {
    emotionality: 5,
    reason: 3,
    curiosity: 3,
    social: -2,
    Activity: 2
  }
},

{
  name: "Cloud Watcher",
  description: "Enjoys staring at clouds and finding patterns in the sky.",
  category: "neutral",
  traits: {
    curiosity: 5,
    emotionality: 3,
    reason: -2,
    Activity: -2,
    intelligence: 3
  }
},

{
  name: "Breeze Lover",
  description: "Feels most comfortable in places with flowing air and gentle winds.",
  category: "neutral",
  traits: {
    independence: 4,
    Activity: 4,
    emotionality: 3,
    curiosity: 2,
    social: 2
  }
},

{
  name: "Swamp Dweller",
  description: "Feels at home among wetlands, mud, and tangled vegetation.",
  category: "neutral",
  traits: {
    curiosity: 5,
    independence: 4,
    Activity: 3,
    social: -2,
    reason: 1
  }
},

{
  name: "Meadow Walker",
  description: "Prefers open fields filled with grasses and wildflowers.",
  category: "neutral",
  traits: {
    emotionality: 4,
    social: 3,
    curiosity: 3,
    Activity: 2,
    reason: 3
  }
},

{
  name: "Ancient Tree Lover",
  description: "Feels connected to old forests and massive trees.",
  category: "neutral",
  traits: {
    emotionality: 5,
    reason: 4,
    curiosity: 3,
    Activity: -1,
    social: 2
  }
},

{
  name: "Rock Collector",
  description: "Collects interesting stones and treasures from the earth.",
  category: "neutral",
  traits: {
    curiosity: 5,
    independence: 4,
    emotionality: 3,
    Activity: 2,
    social: 1
  }
},

{
  name: "Night Walker",
  description: "Prefers traveling and exploring after sunset.",
  category: "neutral",
  traits: {
    independence: 5,
    curiosity: 4,
    Activity: 3,
    social: -2,
    courage: 1
  }
},

{
  name: "Dawn Chaser",
  description: "Feels energized by early mornings and new beginnings.",
  category: "neutral",
  traits: {
    Activity: 5,
    curiosity: 3,
    confidence: 3,
    emotionality: 2,
    social: 2
  }
},

{
  name: "Tide Watcher",
  description: "Enjoys watching changing waters and natural cycles.",
  category: "neutral",
  traits: {
    emotionality: 4,
    curiosity: 4,
    reason: 3,
    independence: 2,
    social: 2
  }
},

{
  name: "Volcano Heart",
  description: "Drawn to intense landscapes and powerful natural forces.",
  category: "neutral",
  traits: {
    courage: 5,
    Activity: 4,
    emotionality: 3,
    curiosity: 2,
    reason: 1
  }
},

{
  name: "Canyon Roamer",
  description: "Enjoys exploring deep valleys and hidden pathways.",
  category: "neutral",
  traits: {
    curiosity: 5,
    independence: 4,
    Activity: 3,
    courage: 2,
    social: 1
  }
},

{
  name: "Frost Touched",
  description: "Feels most comfortable in cold and quiet environments.",
  category: "neutral",
  traits: {
    reason: 4,
    emotionality: 3,
    independence: 3,
    social: -2,
    Activity: 3
  }
},

{
  name: "Jungle Heart",
  description: "Thrives among dense forests full of life and sounds.",
  category: "neutral",
  traits: {
    curiosity: 5,
    Activity: 4,
    social: 3,
    courage: 2,
    reason: 1
  }
},

{
  name: "Beach Wanderer",
  description: "Feels at peace near shores and endless horizons.",
  category: "neutral",
  traits: {
    emotionality: 4,
    independence: 4,
    Activity: 3,
    curiosity: 2,
    social: 2
  }
},
// ⚖️ NEUTRAL — NATURE PREFERENCES

{
  name: "Moon-Gazer",
  description: "Feels most comfortable beneath moonlight and quiet nighttime skies.",
  category: "neutral",
  traits: {
    emotionality: 5,
    curiosity: 3,
    reason: 3,
    social: -2,
    independence: 2
  }
},

{
  name: "Storm Chaser",
  description: "Drawn to storms, strong winds, and dramatic weather.",
  category: "neutral",
  traits: {
    courage: 5,
    curiosity: 4,
    Activity: 3,
    reason: -2,
    confidence: 1
  }
},

{
  name: "Rain Lover",
  description: "Finds comfort and peace in rainfall and wet environments.",
  category: "neutral",
  traits: {
    emotionality: 5,
    curiosity: 3,
    reason: 3,
    social: -2,
    independence: 2
  }
},

{
  name: "River Wanderer",
  description: "Feels connected to flowing water and follows rivers whenever possible.",
  category: "neutral",
  traits: {
    curiosity: 5,
    independence: 4,
    Activity: 3,
    emotionality: 2,
    reason: 1
  }
},

{
  name: "Mountain Dweller",
  description: "Prefers high places, cliffs, and the solitude of mountains.",
  category: "neutral",
  traits: {
    independence: 5,
    courage: 3,
    confidence: 3,
    social: -2,
    reason: 2
  }
},

{
  name: "Cave Seeker",
  description: "Enjoys dark, enclosed, and protected spaces.",
  category: "neutral",
  traits: {
    independence: 5,
    reason: 4,
    emotionality: 2,
    social: -2,
    curiosity: 2
  }
},

{
  name: "Flower Tender",
  description: "Drawn to flowers, gardens, and delicate plant life.",
  category: "neutral",
  traits: {
    empathy: 5,
    emotionality: 4,
    curiosity: 3,
    Activity: 2,
    social: 1
  }
},

{
  name: "Moss Lover",
  description: "Prefers damp forests, quiet places, and soft natural landscapes.",
  category: "neutral",
  traits: {
    emotionality: 5,
    curiosity: 3,
    independence: 3,
    social: -2,
    reason: 2
  }
},

{
  name: "Desert Soul",
  description: "Thrives in dry landscapes and endless open spaces.",
  category: "neutral",
  traits: {
    independence: 5,
    confidence: 4,
    courage: 3,
    emotionality: -1,
    Activity: 2
  }
},

{
  name: "Snow Lover",
  description: "Feels at home in cold climates and snowy environments.",
  category: "neutral",
  traits: {
    independence: 4,
    reason: 4,
    emotionality: 3,
    Activity: 2,
    social: -2
  }
},

{
  name: "Heat Seeker",
  description: "Always searches for warmth and sunny places.",
  category: "neutral",
  traits: {
    Activity: 5,
    confidence: 3,
    emotionality: 3,
    curiosity: 2,
    social: 2
  }
},

{
  name: "Fog Walker",
  description: "Enjoys mysterious places covered in mist and low visibility.",
  category: "neutral",
  traits: {
    curiosity: 5,
    reason: -3,
    emotionality: 4,
    independence: 2,
    social: -1
  }
},

{
  name: "Star Watcher",
  description: "Spends time observing the skies and distant worlds.",
  category: "neutral",
  traits: {
    curiosity: 5,
    intelligence: 4,
    reason: 3,
    social: -2,
    emotionality: 1
  }
},

{
  name: "Open Plains Lover",
  description: "Prefers wide landscapes where they can see for miles.",
  category: "neutral",
  traits: {
    independence: 4,
    confidence: 3,
    courage: 3,
    Activity: 3,
    curiosity: 2
  }
},
{
  name: "Early Riser",
  description: "Enjoys starting the day before others and feels energized by routine.",
  category: "neutral",
  traits: {
    Activity: 4,
    reason: 3,
    confidence: 3,
    curiosity: 2,
    social: 3
  }
},

{
  name: "Night Owl",
  description: "Feels most comfortable during quiet nights and prefers being awake when others rest.",
  category: "neutral",
  traits: {
    independence: 4,
    curiosity: 4,
    emotionality: 3,
    social: -2,
    reason: 2
  }
},

{
  name: "Busybody",
  description: "Always wants to know what is happening and involves themselves in everything.",
  category: "neutral",
  traits: {
    curiosity: 5,
    social: 4,
    Activity: 3,
    comedy: 2,
    reason: -1
  }
},

{
  name: "Lone Wolf",
  description: "Prefers handling challenges alone and values personal freedom.",
  category: "neutral",
  traits: {
    independence: 5,
    confidence: 3,
    courage: 3,
    social: -3,
    reason: 1
  }
},

{
  name: "Class Clown",
  description: "Uses humor to entertain others and lighten serious situations.",
  category: "neutral",
  traits: {
    comedy: 5,
    social: 4,
    confidence: 3,
    Activity: 2,
    reason: -1
  }
},

{
  name: "Daydreamer",
  description: "Often lost in thoughts, ideas, and imaginary possibilities.",
  category: "neutral",
  traits: {
    curiosity: 5,
    emotionality: 4,
    intelligence: 2,
    reason: -2,
    Activity: -2
  }
},

{
  name: "Straight Shooter",
  description: "Says exactly what they think and values honesty over politeness.",
  category: "neutral",
  traits: {
    morality: 4,
    confidence: 4,
    reason: 3,
    social: 2,
    empathy: -2
  }
},

  // 🌑 NEGATIVE
{
  name: "Cowardly",
  description: "Avoids danger even when action is necessary.",
  category: "negative",
  traits: {
    morality: 0,
    social: -1,
    courage: -5,
    intelligence: 0,
    ambition: -2,
    Activity: -2,
    confidence: -3,
    emotionality: 2,
    empathy: 0,
    curiosity: -2,
    independence: -1,
    loyalty: -1,
    reason: 2,
    comedy: 0
  }
}, 
{
  name: "Chaotic",
  description: "Acts unpredictably and embraces disorder.",
  category: "negative",
  traits: {
    morality: 0,
    social: 1,
    courage: 2,
    intelligence: 0,
    ambition: 0,
    Activity: 3,
    confidence: 1,
    emotionality: 2,
    empathy: -1,
    curiosity: 3,
    independence: 2,
    loyalty: 0,
    reason: -5,
    comedy: 3
  }
},

{
  name: "Curious Trouble-Maker",
  description: "Their curiosity often finds them and others in dangerous situations.",
  category: "negative",
  traits: {
    morality: -1,
    social: 1,
    courage: 2,
    intelligence: 1,
    ambition: 0,
    Activity: 2,
    confidence: 1,
    emotionality: 1,
    empathy: -1,
    curiosity: 5,
    independence: 1,
    loyalty: 0,
    reason: -4,
    comedy: 1
  }
},

{
  name: "Indecisive",
  description: "Struggles with making choices and committing to actions.",
  category: "negative",
  traits: {
    morality: 0,
    social: 0,
    courage: -2,
    intelligence: 1,
    ambition: -2,
    Activity: -1,
    confidence: -4,
    emotionality: 2,
    empathy: 0,
    curiosity: 0,
    independence: -2,
    loyalty: 1,
    reason: 1,
    comedy: 0
  }
},

{
  name: "Watcher",
  description: "Observes more than acts, often becoming distracted by what they see.",
  category: "negative",
  traits: {
    morality: 0,
    social: -1,
    courage: -1,
    intelligence: 2,
    ambition: -1,
    Activity: -2,
    confidence: -1,
    emotionality: 0,
    empathy: 0,
    curiosity: 3,
    independence: 1,
    loyalty: 0,
    reason: 1,
    comedy: 0
  }
},

{
  name: "Troublesome",
  description: "Creates disruption and struggles to maintain peace.",
  category: "negative",
  traits: {
    morality: -3,
    social: 1,
    courage: 1,
    intelligence: 0,
    ambition: 1,
    Activity: 2,
    confidence: 2,
    emotionality: 1,
    empathy: -2,
    curiosity: 1,
    independence: 1,
    loyalty: -1,
    reason: -4,
    comedy: 2
  }
},

{
  name: "Careless",
  description: "Acts without considering consequences or how actions affect others.",
  category: "negative",
  traits: {
    morality: -1,
    social: 0,
    courage: 1,
    intelligence: -1,
    ambition: 0,
    Activity: 1,
    confidence: 1,
    emotionality: 0,
    empathy: -2,
    curiosity: 1,
    independence: 2,
    loyalty: -1,
    reason: -3,
    comedy: 0
  }
},

{
  name: "Selfish",
  description: "Prioritizes personal wants above the needs of others.",
  category: "negative",
  traits: {
    morality: -4,
    social: -1,
    courage: 0,
    intelligence: 1,
    ambition: 2,
    Activity: 0,
    confidence: 2,
    emotionality: -1,
    empathy: -5,
    curiosity: 0,
    independence: 2,
    loyalty: -3,
    reason: 1,
    comedy: 0
  }
},

{
  name: "Mean",
  description: "Intentionally unkind toward others.",
  category: "negative",
  traits: {
    morality: -5,
    social: -2,
    courage: 1,
    intelligence: 0,
    ambition: 0,
    Activity: 0,
    confidence: 2,
    emotionality: 1,
    empathy: -4,
    curiosity: 0,
    independence: 1,
    loyalty: -1,
    reason: 0,
    comedy: -1
  }
},

{
  name: "Crazy",
  description: "Erratic behavior that is difficult to predict.",
  category: "negative",
  traits: {
    morality: 0,
    social: 1,
    courage: 2,
    intelligence: -1,
    ambition: 0,
    Activity: 3,
    confidence: 1,
    emotionality: 3,
    empathy: 0,
    curiosity: 2,
    independence: 1,
    loyalty: 0,
    reason: -5,
    comedy: 2
  }
},{
  name: "Reckless",
  description: "Takes dangerous risks without considering consequences.",
  category: "negative",
  traits: {
    morality: 0,
    social: 0,
    courage: 4,
    intelligence: -2,
    ambition: 1,
    Activity: 3,
    confidence: 2,
    emotionality: 1,
    empathy: -1,
    curiosity: 2,
    independence: 2,
    loyalty: 0,
    reason: -4,
    comedy: 1
  }
},

{
  name: "Immature",
  description: "Shows childish behavior and struggles with responsibility.",
  category: "negative",
  traits: {
    morality: -1,
    social: 1,
    courage: 0,
    intelligence: -1,
    ambition: -2,
    Activity: 1,
    confidence: 1,
    emotionality: 3,
    empathy: 0,
    curiosity: 2,
    independence: -2,
    loyalty: 0,
    reason: -2,
    comedy: 3
  }
},

{
  name: "Suspicious",
  description: "Struggles to trust others and expects hidden motives.",
  category: "negative",
  traits: {
    morality: 0,
    social: -3,
    courage: -1,
    intelligence: 2,
    ambition: 0,
    Activity: 0,
    confidence: -1,
    emotionality: 2,
    empathy: -1,
    curiosity: 2,
    independence: 2,
    loyalty: -2,
    reason: 1,
    comedy: 0
  }
},

{
  name: "Fearful",
  description: "Avoids danger and retreats from uncertain situations.",
  category: "negative",
  traits: {
    morality: 0,
    social: -1,
    courage: -5,
    intelligence: 1,
    ambition: -2,
    Activity: -1,
    confidence: -3,
    emotionality: 3,
    empathy: 1,
    curiosity: -1,
    independence: -1,
    loyalty: 1,
    reason: 2,
    comedy: 0
  }
},

{
  name: "Boastful",
  description: "Constantly seeks recognition and exaggerates abilities.",
  category: "negative",
  traits: {
    morality: -1,
    social: 2,
    courage: 2,
    intelligence: 0,
    ambition: 3,
    Activity: 1,
    confidence: 5,
    emotionality: -1,
    empathy: -2,
    curiosity: 0,
    independence: 1,
    loyalty: 0,
    reason: 1,
    comedy: 1
  }
},

{
  name: "Disrespectful",
  description: "Ignores boundaries, rules, or authority.",
  category: "negative",
  traits: {
    morality: -3,
    social: -1,
    courage: 2,
    intelligence: 0,
    ambition: 1,
    Activity: 1,
    confidence: 2,
    emotionality: 0,
    empathy: -2,
    curiosity: 0,
    independence: 3,
    loyalty: -2,
    reason: -1,
    comedy: 1
  }
},

{
  name: "Jealous",
  description: "Resents the success or relationships of others.",
  category: "negative",
  traits: {
    morality: -2,
    social: -1,
    courage: 0,
    intelligence: 1,
    ambition: 2,
    Activity: 0,
    confidence: -3,
    emotionality: 4,
    empathy: -2,
    curiosity: 0,
    independence: -1,
    loyalty: 1,
    reason: -1,
    comedy: 0
  }
},

{
  name: "Annoying",
  description: "Often bothers others without realizing when to stop.",
  category: "negative",
  traits: {
    morality: 0,
    social: 2,
    courage: 1,
    intelligence: -1,
    ambition: 0,
    Activity: 2,
    confidence: 2,
    emotionality: 1,
    empathy: -2,
    curiosity: 1,
    independence: 1,
    loyalty: 0,
    reason: -2,
    comedy: 3
  }
},

{
  name: "Greedy",
  description: "Always wants more and struggles to share.",
  category: "negative",
  traits: {
    morality: -4,
    social: -1,
    courage: 1,
    intelligence: 1,
    ambition: 4,
    Activity: 0,
    confidence: 2,
    emotionality: 0,
    empathy: -4,
    curiosity: 0,
    independence: 2,
    loyalty: -2,
    reason: 1,
    comedy: 0
  }
},

{
  name: "Sensitive",
  description: "Easily hurt emotionally and affected by criticism.",
  category: "negative",
  traits: {
    morality: 1,
    social: 1,
    courage: -1,
    intelligence: 0,
    ambition: -1,
    Activity: 0,
    confidence: -4,
    emotionality: 5,
    empathy: 2,
    curiosity: 0,
    independence: -1,
    loyalty: 1,
    reason: 0,
    comedy: 0
  }
},{
  name: "Mischievous",
  description: "Causes trouble for fun and enjoys creating chaos.",
  category: "negative",
  traits: {
    morality: -1,
    social: 2,
    courage: 1,
    intelligence: 2,
    ambition: 0,
    Activity: 2,
    confidence: 2,
    emotionality: 1,
    empathy: -1,
    curiosity: 3,
    independence: 1,
    loyalty: 0,
    reason: -4,
    comedy: 4
  }
},

{
  name: "Needy",
  description: "Requires constant attention and reassurance from others.",
  category: "negative",
  traits: {
    morality: 0,
    social: 3,
    courage: -1,
    intelligence: 0,
    ambition: -1,
    Activity: 0,
    confidence: -5,
    emotionality: 4,
    empathy: 1,
    curiosity: 0,
    independence: -5,
    loyalty: 2,
    reason: 0,
    comedy: 0
  }
},

{
  name: "Pessimist",
  description: "Expects negative outcomes and focuses on problems.",
  category: "negative",
  traits: {
    morality: 0,
    social: -1,
    courage: -2,
    intelligence: 2,
    ambition: -3,
    Activity: -1,
    confidence: -2,
    emotionality: 2,
    empathy: 1,
    curiosity: -1,
    independence: 1,
    loyalty: 0,
    reason: 2,
    comedy: -1
  }
},

{
  name: "Lazy",
  description: "Avoids effort and prefers inactivity.",
  category: "negative",
  traits: {
    morality: 0,
    social: 0,
    courage: -1,
    intelligence: 0,
    ambition: -4,
    Activity: -5,
    confidence: 0,
    emotionality: 0,
    empathy: 0,
    curiosity: -1,
    independence: 0,
    loyalty: 0,
    reason: 1,
    comedy: 1
  }
},

{
  name: "Hot-Headed",
  description: "Reacts quickly through anger and emotion.",
  category: "negative",
  traits: {
    morality: -1,
    social: -1,
    courage: 2,
    intelligence: -1,
    ambition: 1,
    Activity: 2,
    confidence: 2,
    emotionality: 5,
    empathy: -2,
    curiosity: 0,
    independence: 1,
    loyalty: 1,
    reason: -3,
    comedy: 0
  }
},

{
  name: "Impulsive",
  description: "Acts immediately without thinking things through.",
  category: "negative",
  traits: {
    morality: 0,
    social: 1,
    courage: 2,
    intelligence: -1,
    ambition: 1,
    Activity: 3,
    confidence: 2,
    emotionality: 2,
    empathy: 0,
    curiosity: 2,
    independence: 2,
    loyalty: 0,
    reason: -5,
    comedy: 1
  }
},

{
  name: "Daredevil",
  description: "Seeks danger and pushes limits for excitement.",
  category: "negative",
  traits: {
    morality: 0,
    social: 1,
    courage: 5,
    intelligence: -1,
    ambition: 2,
    Activity: 4,
    confidence: 3,
    emotionality: 1,
    empathy: -1,
    curiosity: 4,
    independence: 2,
    loyalty: 0,
    reason: -4,
    comedy: 1
  }
},

{
  name: "Unyielding",
  description: "Refuses to change direction even when necessary.",
  category: "negative",
  traits: {
    morality: 0,
    social: -1,
    courage: 2,
    intelligence: 0,
    ambition: 2,
    Activity: 1,
    confidence: 3,
    emotionality: -1,
    empathy: -2,
    curiosity: -4,
    independence: 3,
    loyalty: 1,
    reason: 1,
    comedy: 0
  }
},

{
  name: "Vengeful",
  description: "Holds grudges and seeks retaliation against those who wrong them.",
  category: "negative",
  traits: {
    morality: -4,
    social: -1,
    courage: 2,
    intelligence: 1,
    ambition: 1,
    Activity: 1,
    confidence: 2,
    emotionality: 3,
    empathy: -4,
    curiosity: 0,
    independence: 1,
    loyalty: 2,
    reason: -1,
    comedy: 0
  }
},

{
  name: "Insecure",
  description: "Doubts their own abilities and worth.",
  category: "negative",
  traits: {
    morality: 0,
    social: -1,
    courage: -2,
    intelligence: 0,
    ambition: -1,
    Activity: 0,
    confidence: -5,
    emotionality: 4,
    empathy: 1,
    curiosity: 0,
    independence: -2,
    loyalty: 1,
    reason: 1,
    comedy: -1
  }
},{
  name: "Overwhelmed",
  description: "Struggles to function when faced with too much pressure or stress.",
  category: "negative",
  traits: {
    morality: 0,
    social: -1,
    courage: -3,
    intelligence: 1,
    ambition: -2,
    Activity: -2,
    confidence: -4,
    emotionality: 5,
    empathy: 1,
    curiosity: -1,
    independence: -2,
    loyalty: 1,
    reason: 1,
    comedy: -1
  }
},

{
  name: "Guilt-Ridden",
  description: "Blames themselves excessively for mistakes and problems.",
  category: "negative",
  traits: {
    morality: 2,
    social: -1,
    courage: -2,
    intelligence: 0,
    ambition: -1,
    Activity: 0,
    confidence: -4,
    emotionality: 5,
    empathy: 3,
    curiosity: 0,
    independence: -1,
    loyalty: 2,
    reason: 1,
    comedy: -1
  }
},

{
  name: "Overthinker",
  description: "Analyzes situations so deeply that action becomes difficult.",
  category: "negative",
  traits: {
    morality: 0,
    social: -1,
    courage: -1,
    intelligence: 3,
    ambition: 0,
    Activity: -1,
    confidence: -2,
    emotionality: 2,
    empathy: 1,
    curiosity: 3,
    independence: 1,
    loyalty: 0,
    reason: 3,
    comedy: -1
  }
},

{
  name: "Paranoid Observer",
  description: "Constantly searches for threats and hidden intentions.",
  category: "negative",
  traits: {
    morality: 0,
    social: -3,
    courage: -1,
    intelligence: 3,
    ambition: 0,
    Activity: 0,
    confidence: -2,
    emotionality: 3,
    empathy: -1,
    curiosity: 2,
    independence: 3,
    loyalty: -2,
    reason: 2,
    comedy: -1
  }
},

{
  name: "Gluttonous",
  description: "Overly focused on consumption and personal satisfaction.",
  category: "negative",
  traits: {
    morality: -2,
    social: 0,
    courage: 0,
    intelligence: 0,
    ambition: 1,
    Activity: -2,
    confidence: 1,
    emotionality: 1,
    empathy: -2,
    curiosity: 1,
    independence: 1,
    loyalty: 0,
    reason: -2,
    comedy: 1
  }
},

{
  name: "Bossy",
  description: "Attempts to control others and direct situations.",
  category: "negative",
  traits: {
    morality: -1,
    social: -1,
    courage: 2,
    intelligence: 1,
    ambition: 4,
    Activity: 2,
    confidence: 4,
    emotionality: -1,
    empathy: -3,
    curiosity: 0,
    independence: 2,
    loyalty: 0,
    reason: 1,
    comedy: 0
  }
},

{
  name: "Dumb",
  description: "Struggles to understand situations or make decisions quickly.",
  category: "negative",
  traits: {
    morality: 0,
    social: 1,
    courage: 0,
    intelligence: -5,
    ambition: -1,
    Activity: 0,
    confidence: 1,
    emotionality: 1,
    empathy: 0,
    curiosity: 0,
    independence: -1,
    loyalty: 1,
    reason: -1,
    comedy: 2
  }
},

{
  name: "Manipulator",
  description: "Uses influence and deception to achieve personal goals.",
  category: "negative",
  traits: {
    morality: -5,
    social: 2,
    courage: 1,
    intelligence: 4,
    ambition: 3,
    Activity: 0,
    confidence: 3,
    emotionality: -2,
    empathy: -4,
    curiosity: 1,
    independence: 2,
    loyalty: -3,
    reason: 2,
    comedy: 0
  }
},

{
  name: "Stubborn",
  description: "Refuses to change opinions or actions easily.",
  category: "negative",
  traits: {
    morality: 0,
    social: -1,
    courage: 2,
    intelligence: 0,
    ambition: 1,
    Activity: 1,
    confidence: 3,
    emotionality: -1,
    empathy: -2,
    curiosity: -4,
    independence: 3,
    loyalty: 1,
    reason: 1,
    comedy: 0
  }
},

{
  name: "Worrier",
  description: "Frequently expects negative outcomes and focuses on possible problems.",
  category: "negative",
  traits: {
    morality: 1,
    social: -1,
    courage: -3,
    intelligence: 2,
    ambition: -1,
    Activity: -1,
    confidence: -3,
    emotionality: 4,
    empathy: 2,
    curiosity: 1,
    independence: -1,
    loyalty: 1,
    reason: 2,
    comedy: -1
  }
},{
  name: "Ruthless",
  description: "Shows little mercy when pursuing goals or defeating obstacles.",
  category: "negative",
  traits: {
    morality: -5,
    social: -2,
    courage: 4,
    intelligence: 2,
    ambition: 4,
    Activity: 2,
    confidence: 4,
    emotionality: -3,
    empathy: -5,
    curiosity: 0,
    independence: 2,
    loyalty: -1,
    reason: 2,
    comedy: -1
  }
},

{
  name: "Sadistic",
  description: "Finds satisfaction in the suffering or misfortune of others.",
  category: "negative",
  traits: {
    morality: -5,
    social: -2,
    courage: 1,
    intelligence: 1,
    ambition: 0,
    Activity: 1,
    confidence: 2,
    emotionality: -1,
    empathy: -5,
    curiosity: 1,
    independence: 1,
    loyalty: -2,
    reason: -1,
    comedy: -2
  }
},

{
  name: "Corrupt",
  description: "Allows personal gain to override morals and responsibilities.",
  category: "negative",
  traits: {
    morality: -5,
    social: 0,
    courage: 1,
    intelligence: 2,
    ambition: 5,
    Activity: 1,
    confidence: 3,
    emotionality: -2,
    empathy: -3,
    curiosity: 1,
    independence: 2,
    loyalty: -3,
    reason: 2,
    comedy: 0
  }
},

{
  name: "Deceitful",
  description: "Frequently lies or hides the truth to influence others.",
  category: "negative",
  traits: {
    morality: -5,
    social: 2,
    courage: 1,
    intelligence: 3,
    ambition: 2,
    Activity: 0,
    confidence: 2,
    emotionality: -1,
    empathy: -4,
    curiosity: 1,
    independence: 2,
    loyalty: -4,
    reason: 2,
    comedy: 0
  }
},

{
  name: "Tyrannical",
  description: "Seeks absolute control and forces others to obey.",
  category: "negative",
  traits: {
    morality: -5,
    social: -2,
    courage: 4,
    intelligence: 2,
    ambition: 5,
    Activity: 3,
    confidence: 5,
    emotionality: -2,
    empathy: -5,
    curiosity: -1,
    independence: 3,
    loyalty: -2,
    reason: 2,
    comedy: -1
  }
},
];

module.exports = { personalities };