const complicationOutcomes = [
  {
    name:"Mild Infection",
    severity:"Moderate",
    riskTier:1,
    duration:"A few days of rest and monitoring",
    description:"The wound is infected, but it should heal on its own with rest and care."
  },
  {
    name:"Severe Infection",
    severity:"Severe",
    riskTier:3,
    duration:"Until treated; may last multiple sessions",
    description:"This wound is festering. Find help quickly before it worsens."
  },
  {
    name:"Fracture",
    severity:"Severe",
    riskTier:3,
    duration:"Can last multiple sessions",
    description:"You must have hurt yourself badly. Days later, the damage still hurts."
  },
  {
    name:"Mild Concussion",
    severity:"Moderate",
    riskTier:1,
    duration:"Short-term recovery",
    description:"Forgetfulness, headaches, and irritability linger after the blow."
  },
  {
    name:"Severe Concussion",
    severity:"Severe",
    riskTier:3,
    duration:"Can last multiple sessions",
    description:"Confusion and serious memory problems require time, rest, and careful support."
  },
  {
    name:"Lasting Impairment",
    severity:"Lasting",
    riskTier:4,
    duration:"Permanent",
    description:"The damaged area will never be quite the same after this fight."
  },
  {
    name:"Permanent Damage",
    severity:"Extreme",
    riskTier:4,
    duration:"Permanent",
    description:"The injury leaves permanent damage that changes how this part of the body functions."
  },
  {
    name:"Mild Blood Loss",
    severity:"Moderate",
    riskTier:1,
    duration:"Short-term recovery",
    description:"You are dizzy and woozy; stay near someone until you recover."
  },
  {
    name:"Severe Blood Loss",
    severity:"Severe",
    riskTier:3,
    duration:"Until properly rested and treated",
    description:"It is hard to stand straight and the world is spinning. Rest often and seek help."
  },
  {
    name:"Pulled Muscle",
    severity:"Moderate",
    riskTier:1,
    duration:"Several days of rest",
    description:"You must have moved strangely in the fight; the pain is sharp with movement."
  },
  {
    name:"Sore",
    severity:"Mild",
    riskTier:1,
    duration:"Brief recovery",
    description:"You are sore after the engagement, with reduced stamina until you rest."
  },
  {
    name:"Nightmares",
    severity:"Moderate",
    riskTier:1,
    duration:"Short-term recovery",
    description:"The fight is over, but recurring thoughts and dreams haunt what happened or could have happened."
  },
  {
    name:"Panic Spells",
    severity:"Moderate",
    riskTier:1,
    duration:"Improves with rest and herd presence",
    description:"Hesitation or a flight response appears after the incident; rest and herd presence can help."
  },
  {
    name:"Permanent Anxiety",
    severity:"Lasting",
    riskTier:4,
    duration:"Permanent",
    description:"Panic and anxiety persist around the area where the fight occurred."
  }
];


const mildRecoveryOutcomes = [
  "You are exhausted from the battle but should make a full recovery.",
  "Your muscles ache from exertion; rest will help you heal fully.",
  "Fatigue weighs heavily on you; a good rest will restore strength.",
  "You feel drained but should recover after some quiet time.",
  "Your legs are stiff and sore; a calm day will have you moving normally again.",
  "Bruising is tender; a few days’ rest will see you fully recovered.",
  "Your horns feel sore from pushing and shoving; recovery is expected.",
  "You are limping slightly; movement will return to normal soon.",
  "The adrenaline is fading; rest will bring back your stamina.",
  "You are shaken from the encounter but will regain composure with rest.",
  "Fatigue from the fight is strong; a calm grazing session will help you recover.",
  "Your body aches all over; healing is underway.",
  "You feel drained from the struggle but will recover soon.",
  "Muscle soreness is noticeable; movement will return to normal.",
  "You are tired from exertion but will bounce back fully.",
  "Your neck and shoulders are stiff; rest will ease the discomfort.",
  "Your limbs feel heavy; a day of calm will help you recover.",
  "You are winded and sore; healing will happen with rest.",
  "Bruises are tender but will fade with time.",
  "Your body feels the fight’s strain; recovery is imminent.",
  "You are tired and cautious; soon your strength will return.",
  "Fatigue lingers but will pass after some downtime.",
  "Your body is recovering from minor wounds; soon you’ll feel normal.",
  "Bruised muscles ache; rest is all you need.",
  "You are exhausted but healing; no permanent damage is expected.",
  "Your movement is slow from soreness; full recovery is coming.",
  "You are drained but will regain full stamina shortly.",
  "Your body is tender but resilient; healing is underway.",
  "Exhaustion is heavy, but you will feel better soon.",
  "Your muscles throb from exertion; a day of calm will restore you.",
  "You are winded; full recovery is expected after rest.",
  "Fatigue weighs on you; soon you will feel normal again.",
  "Soreness is noticeable but temporary; rest will help.",
  "You are recovering from the encounter; soon you’ll be back to full strength.",
  "Your body feels worn but will regain vigor soon.",
  "You are tired but on the mend; soon you’ll feel whole again.",
  "Exhaustion is fading; strength will return shortly.",
  "Your muscles ache but recovery is underway.",
  "You are weary but healing; full movement will return.",
  "Fatigue is strong, but you will recover fully.",
  "You are sore from the battle; rest is helping you heal."
];


module.exports = {
  complicationOutcomes,
  mildRecoveryOutcomes
};
