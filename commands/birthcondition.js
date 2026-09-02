const {
  SlashCommandBuilder
} = require("discord.js");

const birthUI =
require("../systems/birthConditionUI");


module.exports = {

data: new SlashCommandBuilder()
.setName("birthcondition")
.setDescription("Generate a character birth condition profile"),


async execute(interaction) {

    await birthUI.startBirth(interaction);

}

};