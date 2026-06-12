require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits, Collection } = require('discord.js');

// ======================
// BOT SETUP
// ======================
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// Store commands
client.commands = new Collection();

// ======================
// LOAD COMMAND FILES
// ======================
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  if (command.data && command.execute) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`⚠️ Invalid command file: ${file}`);
  }
}

// ======================
// BOT READY
// ======================
client.once('clientReady', () => {
  console.log('🌿 Steeped Design Bot is online!');
});

// ======================
// COMMAND HANDLER
// ======================
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    return interaction.reply({
      content: "❌ Command not found.",
      ephemeral: true
    });
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);

    await interaction.reply({
      content: "❌ There was an error running this command.",
      ephemeral: true
    });
  }
});

// ======================
// LOGIN
// ======================
client.login(process.env.TOKEN);