require('dotenv').config();
const { Client, Intents } = require('discord.js');

const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS, // global event on the server
        Intents.FLAGS.GUILD_MESSAGES, // global event message
    ]
});

bot.on("ready", ()=>{
    console.log("Started");
});

bot.on("guildMemberAdd", member =>{
    const channelId = 935852118152208387;
    const welcomeMessage = `Bienvenue à toi guerrier <@${member.id}>!`;
    member.guild.channels.fetch(channelId).then(channel =>{
        channel.send(welcomeMessage);
    })
});


bot.on("messageCreate",  message =>{
    if(message.author.bot) return;

    if(message.content.toLowerCase()==='!kingdom'){
        message.channel.send('Rejoins Shin !');
    }
});


bot.login(process.env.TK);