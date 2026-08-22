const { SlashCommandBuilder } = require('discord.js');
const { rollSingle } = require('../systems/personalitySystem');
const { personalities } = require('../data/personalities');
const {
  saveCharacterPersonality
} = require('../systems/characterProfileStore');


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


    const name =
      interaction.options.getString('charactername');



    // 🎲 Roll personality name

    const rolled =
      rollSingle();



    // 🌿 Find personality data

    const personality =
      personalities.find(
        p => p.name === rolled
      );



    if(!personality){

      return interaction.reply(
        "❌ The personality brew failed to find its ingredient."
      );

    }


    saveCharacterPersonality({
      ownerId:interaction.user.id,
      ownerName:interaction.user.username,
      characterName:name,
      personality:{
        traits:[{
          name:personality.name,
          description:personality.description
        }],
        synergies:[]
      }
    });



    const responses = [

      `${name} is known to be **${personality.name}** — ${personality.description}`,

      `${name} tends to express themselves through **${personality.name}**. ${personality.description}`,

      `Those who know ${name} would describe them as **${personality.name}**. ${personality.description}`,

      `${name} carries a personality shaped by **${personality.name}** — ${personality.description}`

    ];



    const output =
      responses[
        Math.floor(Math.random() * responses.length)
      ];



    await interaction.reply(output);

  }

};
