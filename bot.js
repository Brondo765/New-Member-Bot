// Product is of version 12.1.1 from the Discord API
// qckwinsvs allows bot.js to be run as a Windows Service

const config = require("./config.json");
const Discord = require("discord.js"); 
const bot = new Discord.Client();
let date_obj = new Date();
let date = ('0' + date_obj.getDate()).slice(-2);
let month = ('0' + (date_obj.getMonth() + 1)).slice(-2);
let year = date_obj.getFullYear();
let hours = date_obj.getHours();
let mins = date_obj.getMinutes();
let seconds = date_obj.getSeconds();
let fullDate = year + '-' + month + '-' + date + ' ' + hours + ':' + mins + ':' + seconds;

// Output to console checking if bot connected to Discord server correctly
bot.on("ready", () => {
  console.log(`Bot online and connected to Discord server.\n` + fullDate);
  // Sets semi-custom activity status if you want to have no status for your bot delete line below
  bot.user.setActivity("for new users to join", {type : "WATCHING"}); 
});

// Bot responds when a new member is added to the server
bot.on("guildMemberAdd", member => {
    console.log(member.user.username + " has joined the server! ");
    // Adds member to designated role according to roleID provided in config.json file
    member.roles.add(config.roleID); 
    // Generates the name of the server according to serverID provided in config.json file
    var serverName = bot.guilds.cache.get(config.serverID); 
    // Generates the name of the channel according to channelID provided in config.json file
    var channel = bot.channels.cache.get(config.channelID)

    // Sends custom message mentioning the user and adds rules provided in config.json file
    channel.send(`Hello, ${member.user} welcome to ${serverName}!\n` + config.rules.join(" "));
});
// Login token from Discord Devs website
bot.login(config.token); 
