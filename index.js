var channels = require("./channels.json");

const token = require("./login.json");
const cron = require("node-cron")
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function blazeAlert(){
  for(var k in channels) {
    var guildId = channels[k].guild;
    var channelId = channels[k].channel;

    console.log(`testing if guild ${guildId} exists...`);

    if(client.guilds.has(guildId)) {
      var guild = client.guilds.get(guildId);
      console.log(`guild ${guildId} (${guild.name}) exists! now testing if ${channelId} exists...`);
      if(guild.channels.has(channelId)){
        var channel = guild.channels.get(channelId);
        console.log(`channel ${channelId} (${channel.name}) exists! sending message.`);
        channel.send(":ok_hand: :leaf: It's 4:20!");
      }
    }
  }
}

cron.schedule("20 4 * * *", () =>{
  blazeAlert();
});
cron.schedule("20 16 * * *", () =>{
  blazeAlert();
});

client.login(token);
