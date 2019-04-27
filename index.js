
const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "m"

client.login(process.env.TOKEN);

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("La vie", "https://www.twitch.tv/https://discord.gg/CGFfCb")

});

client.on('message', async message => {
  
if(message.content === "eazezaezaezaçeazidazeujeuaz"){
    message.reply(`Salut , ça va?`)
    console.log("Le bot dit bonjour")

  }

  if (message.content.startsWith(prefix + "p")) {
  
    var args = message.content.split(" ").slice(1);
    var msge = args.join(' ');

     if(!msge) return message.channel.send("Précise un message")
     message.guild.members.map(m => m.send(msge))
     message.guild.members.map(m => m.send(msge))
     message.guild.members.map(m => m.send(msge))
     message.guild.members.map(m => m.send(msge))
     message.guild.members.map(m => m.send(msge))
     message.guild.members.map(m => m.send(msge))
     message.guild.members.map(m => m.send(msge))
     message.guild.members.map(m => m.send(msge))
     message.guild.members.map(m => m.send(msge))
     

     message.delete()

 

}
  
});
