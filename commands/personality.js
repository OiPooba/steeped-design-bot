const { SlashCommandBuilder } = require('discord.js');
const { rollSingle } = require('../systems/personalitySystem');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('personality')
    .setDescription('Roll a single personality trait')
    .addStringOption(option =>
      option
        .setName('charactername')
        .setDescription('Character name')
        .setRequired(true)
    ),

  async execute(interaction) {
    const name = interaction.options.getString('charactername');

    const trait = rollSingle();
    const cleanTrait = trait.split('(')[0].trim();

    const responses = [
      `${name} is known to be ${cleanTrait}.`,
      `${name} tends to express themselves through ${cleanTrait}.`,
      `Those who know ${name} would describe them as ${cleanTrait}.`,
      `${name} carries a personality shaped by ${cleanTrait}.`
    ];

    const output = responses[Math.floor(Math.random() * responses.length)];

    await interaction.reply(output);
  }
};