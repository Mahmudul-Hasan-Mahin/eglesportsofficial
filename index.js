const Discord = require('discord.js');
const bot = new Discord.Client({ disableEveryone: false });
const readline = require("readline");
const token = 'NzMyMjcwMzQyOTA2ODM5MTUx.XwyJ5g.hupEUJNhPDbdoQwpdwdjeQKOgEo'; //EGL ESPORTS
const ownerid = '514004320547504130';

const PREFIX = '~';

var version = '1.0.1'
//Welcome EGL ESPORTS
bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(c => c.id === '728534570374397972'); // change this to the channel name you want to send the greeting to
  if (!channel) return;
  channel.send(`${member},\nWelcome To **${member.guild.name}**.\nYou Are Now a Part Of Our Family .\nHave a Great Time in **${member.guild.name}**`);
});

//DM All
bot.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX + "dmall")) {
    message.delete();

    let msg = message.content.slice((PREFIX + "dmall ").length);

    if (message.author.id != ownerid)
      return message.channel.send("You don't have permission to use that command . This Command Only Can Use **MAHIN#9817**");

    try {
      message.guild.members.forEach(member => {
        if (member.id != bot.user.id && !member.user.bot) member.send(msg);
      });
    } catch (e) {}
    return message.channel
      .send(`Sending Dm To **${message.guild.members.size}** Members.`)
      .then(msg => msg.delete(3000));
  } 
})
//Say
bot.on("message", async message => {
  if(message.content.startsWith(PREFIX+"dmall")) return ;
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;
  if (message.author.id != ownerid)
    return message.channel.send("You don't have permission to use that command . This Command Only Can Use **MAHIN#9817**");

  let command = message.content.split(" ")[0];
  command = command.slice(PREFIX.length);

  let args = message.content.split(" ").slice(1);

  if (command === "embed") {
    if (!message.content.startsWith(PREFIX+"embed")) return;
    message.delete();
    let mChannel = message.mentions.channels.first();
    
      const color = args[0];
      const text = args.slice(0).join(" ");
      if (text.length < 1) return message.channel.send("Can not say nothing");
      //const colour = args.slice(2).join("");
      const embed = new Discord.RichEmbed()
        .setColor(0x0074ff)
        .setDescription(text)
        .setFooter(`${bot.user.username}`)
        .setTimestamp();

      if (mChannel) {
        mChannel.send(embed);
      } else {
        message.channel.send(embed);
      }
    }
   else 
      if (command === "announceembed") {
        if (!message.content.startsWith(PREFIX+"announceembed")) return;
     message.delete();
    let mChannel = message.mentions.channels.first(); 
      const color = args[0];
      const text = args.slice(0).join(" ");
      if (text.length < 1) return message.channel.send("Can not say nothing");
      //const colour = args.slice(2).join("");
      const embed = new Discord.RichEmbed()
        .setColor(0x0074ff)
        .setDescription(text)
        .setFooter(`${bot.user.username}`)
        .setTimestamp();

      if (mChannel) {
        mChannel.send('@everyone')
        mChannel.send(embed);
      } else {
        message.channel.send('@everyone')
        message.channel.send(embed);
      }
    } else
    
    if ((command = "say")) {
      if (!message.content.startsWith(PREFIX+"say")) return;
    message.delete();
    let argsresult;
    let mChannel = message.mentions.channels.first();

    if (mChannel) {
      argsresult = args.slice(1).join(" ");
      mChannel.send(argsresult);
    } else {
      argsresult = args.join(" ");
      message.channel.send(argsresult);
    }
  }
});
//SetActivity
bot.on('message', message => {

    const ownerID = ["514004320547504130"];

    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(PREFIX + 'setStreaming')) {
      if (!ownerID.includes(message.author.id)) return;
      message.delete();
      bot.user.setGame(argresult, 'https://twitch.tv/Kahrbaa');

    } else if(message.content.startsWith(PREFIX + 'setWatching')) {
        bot.user.setActivity(argresult,{type: 'WATCHING'});

      } else if(message.content.startsWith(PREFIX + 'setListening')) {
        bot.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(PREFIX + 'setPlaying')) {
        bot.user.setActivity(argresult,{type: 'PLAYING'});

      } else if(message.content.startsWith(PREFIX + 'setName')) {
        bot.user.setUsername(argresult);

      } else if(message.content.startsWith(PREFIX + 'setAvatar')) {
        bot.user.setAvatar(argresult);


      } else if(message.content.startsWith(PREFIX + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
		bot.user.setStatus(argresult);


    }

  });



bot.login(token);

