const Discord = require('discord.js');
const client = new Discord.Client();
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("kabaczek?\n");
});
server.listen(80);
  var dlugieNogi = new Array();
  dlugieNogi[0] = "level -1?? :point_right: :ok_hand: :wink:  https://cdn.discordapp.com/attachments/215369954608939008/235796677842173953/Gdzie_jest.JPG";
  dlugieNogi[1] = "level 0? https://cdn.discordapp.com/attachments/234655037178118144/235792804675190784/Darwin.png";
  dlugieNogi[2] = "LEVEL ( ͡° ͜ʖ ͡°)!!111!!1111!!!!!! http://i.imgur.com/44mtbEZ.png (╯°□°）╯︵ ┻━┻ (╯°□°）╯︵ ┻━┻ (╯°□°）╯︵ ┻━┻ :point_right: :ok_hand: ";
  dlugieNogi[3] = "LEvel 3 https://cdn.discordapp.com/attachments/234655037178118144/235791652462002177/l_12.jpg";
  dlugieNogi[4] = "LEVEL 5!!!! http://i.imgur.com/pveoOGT.png";
  dlugieNogi[5] = "level 1 https://cdn.discordapp.com/attachments/234655037178118144/235792654774829057/l_9.jpg";
  dlugieNogi[6] = "Level 2 https://cdn.discordapp.com/attachments/234655037178118144/235792703768494083/l_53.jpg";
  dlugieNogi[7] = "LEVel 4? https://cdn.discordapp.com/attachments/234655037178118144/235792734974115841/bw134_2.JPG";
  var Teksty = new Array();
  Teksty[0] = "GESTEMIRTI FOLOGOSOMO";
  Teksty[1] = "mniam pyszne flaki sram ";
  Teksty[2] = "Jodrispompolo spolorizino ";
  Teksty[3] = "SAHARA";
  Teksty[4] = "ZDECHŁ JA PIERODOLĘ";
  Teksty[5] = "TESKO – DLYA WAS, DLYA SEM'I, для вас, для семьи, 為自己, 为族";
  Teksty[6] = "Tam występował znany z YouTube Bartosz Walasek, jak się darł: TVN REKLAMA";
  Teksty[7] = "wiesz, co wieesz, planujeesz, owszem - masz co jeść";
  Teksty[8] = "Zablokował. Amen";
  Teksty[9] = "Nie wolno srać o 9:50";
  Teksty[10] = "Nie da się mieć nazwiska Semeniuk";
  Teksty[11] =  "Kto umrze, srając o 9:50, ten w następnym wcieleniu będzie miał pecha każdego dnia o godzinie 9:50.";
  Teksty[12] = "zrub TVP92 kakao gegege";
  Teksty[13] = "zrubmy kartofle z ziemniakuw";
  Teksty[14] = "KÓP MYDŁO";
  Teksty[15] = "Twoja Stara International S.A.";
client.on('ready', () => {
    client.user.setGame("kabaczek");
    client.user.setStatus("idle"); 
});
client.on("guildMemberAdd", (member) => {
    console.log(`Nowy użytkownik "${member.user.username}" dołączył do "${member.guild.name}"` );
    member.guild.defaultChannel.sendMessage(`**${member.user.username}** dołączył do najbardziej nieaktywnego nserwera świata - 134Chan!`);
});
client.on("guildMemberRemove", (member) => {
    console.log(`"${member.user.username}" wyszedl "${member.guild.name}"` );
    member.guild.defaultChannel.sendMessage(`**${member.user.username}** wyszedł z 134Chan. Kabaczek!`);
});
client.on('message', message => {
  if (message.content === 'dzi') {
    message.reply('JĘZYK!!!!!!');
  }
  if (message.content === '-s darwin') {
      message.channel.sendMessage(dlugieNogi[Math.floor(Math.random()*dlugieNogi.length)]);
    }
	 if (message.content === '-s teksty') {
      message.channel.sendMessage(Teksty[Math.floor(Math.random()*Teksty.length)]);
    }
	 if (message.content === '-s') {
    message.channel.sendMessage('**XD — feeling annoyed.** *- Dark Archon, 2016*');
  }
    if (message.content === '$pomoc') {
    message.channel.sendMessage('anibw134 - twój naczelny informator. wersja waco... to znaczy 1.1. by vistafan12 (nPremium, znany również jako VistaBan12). Changelog: $czejnczlog');
  }
   if (message.content === '$czejnczlog') {
    message.channel.sendMessage('16.06.2017: Dodano komendę -s darwnin, -s oraz -s teksty ze starego bota "Finn"; poprawiono błędy');
  }
    if (message.content === '$ping') {
    message.channel.sendMessage('Pong!');
  }
});

client.login('token lel');
