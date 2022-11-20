const discord = require("discord.js");

const client = new discord.Client
({
    intents: [discord.GatewayIntentBits.Guilds]
});

client.once(discord.Events.ClientReady, (account) =>
{
    console.log(`Logged in as ${account.user.tag}`);
});

client.login("");