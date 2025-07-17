 const fs = require('fs');
const { Client, GatewayIntentBits, Collection, Partials } = require('discord.js');
require('dotenv').config();
const { keepAlive } = require('./keepAlive');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Channel]
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (command) {
    try { await command.execute(interaction); }
    catch (error) { console.error(error); interaction.reply({ content: '❌ حدث خطأ!', ephemeral: true }); }
  }
});

client.once('ready', () => console.log(`✅ البوت شغال باسم ${client.user.tag}`));

keepAlive();
client.login(process.env.TOKEN);

