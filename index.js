const Discord = require ('Discord.js');
const client = new Discord.Cient();

client.on('rerady, () => {
  consoe.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping'){
    message.reply('pong');
  }
});

client.login(process.env.BOT_TOKEN);
