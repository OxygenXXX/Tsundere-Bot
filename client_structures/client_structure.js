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

const default_bot_options = 
{
    intents: default_bot_intents,
    shardCount: default_shard_count
};

class Client extends discord.Client
{
    constructor(client_options, client_parameters)
    {
        super(client_options || default_bot_options);

        consola.success("Client initialized successfully!");

        const { client_token = "" } = client_parameters;
        const { client_prefix = "" } = client_parameters; 

        const { client_owner_id = "" } = client_parameters;

        this.client_owner_id = client_owner_id;

        this.client_token = client_token;
        this.client_prefix = client_prefix;

        consola.success("Client settings initialized successfully!");

        this.commands = new discord.Collection();
        this.aliases = new discord.Collection();

        consola.success("Client collections initialized successfully!");
    }

    set_presence(presence_details)
    {
        const { client_status = "" } = presence_details;

        const { activity_content = ""} = presence_details;
        const { activity_type = "" } = presence_details;

        this.user.setStatus(presence_details.client_status);

        consola.success(`Client status successfully set to ${client_status}`);

        this.user.setActivity
        (
            presence_details.activity_content,
            { type: presence_details.activity_type }
        );

        consola.success(`Client activity set to ${activity_type}:${activity_content}`);
    }

    authorise(client_token)
    {
        try
        {
            this.login(this.client_token || client_token);

            this.client_id = this.user.id;
            this.client_tag = this.user.tag;

            this.client_name = this.user.username;
        }

        catch(exception_point)
        {
            consola.error("An error occurred while logging in!");

            throw new Error(exception_point);
        }
    }
}

module.exports.Client = Client;