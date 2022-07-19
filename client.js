const discord = require("discord.js");

const { GatewayIntentBits } = require("discord.js");

const dotenv = require("dotenv").config();

const client_token = process.env.CLIENT_TOKEN;

const client_intents = 
[
    GatewayIntentBits.Guilds,

    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,

    GatewayIntentBits.GuildBans,

    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessageReactions,
];

const client = new discord.Client
({
    intents: client_intents
});

client.once("ready", () =>
{
    console.log("Client is ready!");
});

client.on("messageCreate", async (message) =>
{
    if(message.author.bot) return;

    console.log(`New message: ${message.content}`);

    message.channel.send("Hello");
});

client.login(client_token);