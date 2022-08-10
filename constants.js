
const discord = require("discord.js");

const client_config = require("config.json");

const client_intents = 
[
    GatewayIntentBits.Guilds,

    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,

    GatewayIntentBits.GuildBans,

    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessageReactions,
];

const client_token = process.env.CLIENT_TOKEN;
const client_prefix = client_config.client.prefix;

module.exports = 
{
    client_intents,

    client_token,
    client_prefix
}