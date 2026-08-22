const { SlashCommandBuilder } = require('discord.js');
const { rollFull } = require('../systems/personalitySystem');
const { getSynergy } = require('../systems/traitSynergy');
const { personalities } = require('../data/personalities');
const {
  saveCharacterPersonality
} = require('../systems/characterProfileStore');


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

      const name =
        interaction.options.getString('charactername');



      // 🎲 Generate personalities

      const roll = rollFull();



      if(!roll?.result || !Array.isArray(roll.result)){

        throw new Error(
          "rollFull() returned invalid format"
        );

      }



      // 🌿 Convert names into personality objects

      const traits = roll.result

        .map(t =>
          personalities.find(
            p => p.name === t
          )
        )

        .filter(Boolean);



      if(traits.length !== 3){

        throw new Error(
          "Could not find all generated personalities"
        );

      }



      // 🧬 Generate stacked synergies

      const synergy = getSynergy(traits);


      saveCharacterPersonality({
        ownerId:interaction.user.id,
        ownerName:interaction.user.username,
        characterName:name,
        personality:{
          traits:traits.map(trait => ({
            name:trait.name,
            description:trait.description
          })),
          synergies:synergy.map(item => ({
            name:item.name,
            description:item.description
          }))
        }
      });



      // 🍃 Format personalities

      const traitLines = traits

        .map(t =>
          `🌿 **${t.name}** — ${t.description}`
        )

        .join("\n");



      // 🍵 RP personality descriptions

      const rpSentences = [

        `${name} feels like a carefully steeped blend of ${traits.map(t => t.name).join(", ")}, unfolding slowly over time.`,

        `Like warm tea left to infuse, ${name} carries hints of ${traits.map(t => t.name).join(", ")} in their presence.`,

        `${name} is a layered brew of personality—${traits.map(t => t.name).join(", ")}, each influencing how they move through the world.`,

        `Those who spend time with ${name} notice the subtle infusion of ${traits.map(t => t.name).join(", ")} in their actions.`

      ];


      const rpSentence =
        rpSentences[
          Math.floor(Math.random() * rpSentences.length)
        ];



      // 🧬 Synergy display

      let synergyText =
        "No strong synergy detected.";


      if(synergy && synergy.length){

        synergyText =
          synergy

          .map(s =>
            `• **${s.name}** — ${s.description}`
          )

          .join("\n");

      }



      return interaction.editReply(

`🍵 **Character Profile: ${name}**

📜 **Steeped Traits:**

${traitLines}


🧬 **Personality Synergies:**

${synergyText}


✨ **Aroma of Personality:**

${rpSentence}`

      );



    } catch(err){

      console.error(
        "FULLPERSONALITY ERROR:",
        err
      );


      return interaction.editReply(

`❌ The brew collapsed unexpectedly:

\`\`\`
${err.message}
\`\`\``

      );

    }

  }

};
