require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", ()=>{
    console.log("Hello");
});




client.login(process.env.TK);