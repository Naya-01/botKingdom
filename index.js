require('dotenv').config();
const { Client, Intents } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS, // global event on the server
        Intents.FLAGS.GUILD_MESSAGES, // global event message
    ]
});
client.discordTogether = new DiscordTogether(client);


client.on("ready", ()=>{
    console.log("Started");
});

client.on("guildMemberAdd", member =>{
    const channelId = 935852118152208387;
    const welcomeMessage = `Bienvenue à toi guerrier <@${member.id}>!`;
    member.guild.channels.fetch(channelId).then(channel =>{
        channel.send(welcomeMessage);
    })
});


client.on("messageCreate",  message =>{
    if(message.author.bot) return;

    if(message.content.toLowerCase()==='!kingdom'){
        message.channel.send('Rejoins Shin !');
    }

    if (message.content === '!draw') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});


client.login(process.env.TK);