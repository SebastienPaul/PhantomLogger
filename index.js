const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async() =>{
  console.log(`${bot.user.username} is online!`);
   bot.user.setActivity("logging information");
});

  bot.on ('guildMemberAdd', member => {
    member.guild.channels.get('437393447536689164').send('***' + member.user.username + '***, has joined the server!');
  });

  bot.on ('guildMemberRemove', member => {
    member.guild.channels.get('437393447536689164').send('***' + member.user.username + '***, has left the server!');
  });

  bot.on('message', message =>{
    if (message.author.equals(bot.user)) return;
      message.guild.channels.get('437393447536689164').send(message.author.username + " wrote a message on: " + message.createdAt + "\n" + message.content);
  });

  bot.on("messageDelete", messageDelete => {
    messageDelete.guild.channels.get('437393447536689164').send(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`)
    if (messageDelete.author.equals(bot.user)) return;
  });

bot.login(process.env.BOT_TOKEN);
