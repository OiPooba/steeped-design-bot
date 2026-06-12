const { SlashCommandBuilder } = require('discord.js');
const { rollFull } = require('../systems/personalitySystem');
const { getSynergy } = require('../systems/traitSynergy');
const { personalities } = require('../data/personalities');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fullpersonality')
    .setDescription('Brew a full personality profile')
    .addStringOption(option =>
      option
        .setName('charactername')
        .setDescription('Character name')
        .setRequired(true)
    ),

  async execute(interaction) {
    await interaction.deferReply();

    try {
      const name = interaction.options.getString('charactername');

      if (typeof rollFull !== 'function') {
        throw new Error('rollFull is not exported correctly from personalitySystem.js');
      }

      const roll = rollFull();

      if (!roll?.result || !Array.isArray(roll.result)) {
        throw new Error('rollFull() returned invalid format');
      }

      const [t1, t2, t3] = roll.result;

      if (!t1 || !t2 || !t3) {
        throw new Error('Missing trait results from rollFull()');
      }

      // 🌿 convert to full trait objects
      const traits = [t1, t2, t3]
        .map(t => personalities.find(p => p.name === t))
        .filter(Boolean);

      // 🧬 synergy uses names only (kept compatible)
      const synergy = getSynergy(traits.map(t => t.name));

      // 🍵 formatted trait lines (NAME + DESCRIPTION)
      const traitLines = traits.map(t =>
        `🌿 **${t.name}** — ${t.description}`
      ).join('\n');

      // 🍵 tea-inspired RP variations
      const rpSentences = [
        `${name} feels like a carefully steeped blend of ${traits.map(t => t.name).join(', ')}, unfolding slowly over time.`,
        `Like warm tea left to infuse, ${name} carries hints of ${traits.map(t => t.name).join(', ')} in their presence.`,
        `${name} is a quiet brew of traits—${traits.map(t => t.name).join(', ')}, layered and complex beneath the surface.`,
        `Those who spend time with ${name} notice a gradual infusion of ${traits.map(t => t.name).join(', ')} in their behavior.`
      ];

      const rpSentence = rpSentences[Math.floor(Math.random() * rpSentences.length)];

      return interaction.editReply(
`🍵 **Character Profile: ${name}**

📜 **Steeped Traits:**
${traitLines}

🧬 **Synergy:**
${synergy || "No strong synergy gently surfaces from the brew."}

✨ **Aroma of Personality:**
${rpSentence}`
      );

    } catch (err) {
      console.error('FULLPERSONALITY ERROR:', err);

      return interaction.editReply(
`❌ The brew collapsed unexpectedly:
\`\`\`${err.message}\`\`\``
      );
    }
  }
};