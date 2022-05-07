const discord = require("discord.js");
const consola = require("consola");

const { Intents } = require("discord.js");

const default_shard_count = 2;

const default_bot_intents =
[
    Intents.FLAGS.GUILDS,
    
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,

    Intents.FLAGS.DIRECT_MESSAGES,

    Intents.FLAGS.GUILD_BANS
];

class Client extends discord.Client
{
    constructor(client_options, client_parameters)
    {
        
    }
}