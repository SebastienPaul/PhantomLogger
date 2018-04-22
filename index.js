const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();



bot.on("ready", async() =>{
  console.log(`${bot.user.username} is online!`);
   bot.user.setActivity("logging information");
});

  bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd ==`${prefix}hello`){
      return message.channel.send("Hello");
    }


  });

  bot.on ('guildMemberAdd', member => {
    member.guild.channels.get('437393447536689164').send('***' + member.user.username + '***, has joined the server!');
  });

  bot.on ('guildMemberRemove', member => {
    member.guild.channels.get('437393447536689164').send('***' + member.user.username + '***, has left the server!');
  });

  bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;

    if (message.content == "hello"){
      message.channel.send("Howdy");
    }

  });

  bot.on('message', message =>{
    if (message.author.equals(bot.user)) return;
    message.guild.channels.get('437393447536689164').send(message.author.username + " wrote a message on: " + message.createdAt + "\n" + message.content);

  });

bot.login(process.env.BOT_TOKEN);
