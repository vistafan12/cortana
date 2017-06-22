const Discord = require('discord.js');
const client = new Discord.Client();
const config = new Discord.Client();
const msg = new Discord.Client();
const hook = new Discord.WebhookClient(config.webhookID, config.webhookToken);
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("cortana on!\n");
});
server.listen(80);
let prefix = "c/";
client.on("guildMemberAdd", (member) => {
    console.log(`New user "${member.user.username}" joined to "${member.guild.name}"` );
    member.guild.defaultChannel.sendMessage(`**${member.user.username}** has joined to this server!`);
});
client.on("guildMemberRemove", (member) => {
    console.log(`"${member.user.username}" he left the "${member.guild.name}"` );
    member.guild.defaultChannel.sendMessage(`**${member.user.username}** left this server!`);
});
client.on('ready', () => {
  console.log('gotowy?');
 client.user.setGame("with vistafan12");
 client.user.setStatus('away');
});

client.on('message', message => {
  if (message.content === '@ Ping') {
    message.reply('pong');
  }
    if (message.content === '@ fuck you') {
    message.reply('I`m only a virtual assistant.');
  }
      if (message.content === '@ Fuck you') {
   message.reply('I`m only a virtual assistant.');
  }
        if (message.content === '@ Cortana! WHAT DID YOU DO WITH SIRI?') {
    message.reply('I do not know.');
  }
          if (message.content === '@ cortana! WHAT DID YOU DO WITH SIRI?') {
    message.reply('I do not know.');
  }
   if (message.content === 'c/help') {
    message.reply('Conversations: ```@ Cortana! WHAT DID YOU DO WITH SIRI? @ Hi Siri! @ Cortana! @ ok google @ im best @ What is my avatar @ Do you like me? @ fuck you @ happy birthday``` Commands key: ```c/disco c/help c/say c/info c/search c/invatelink c/osu```More comming soon... http://vistafan12.eu ');
  }
  if (message.content === '@ Cortana!') {
    message.reply('Hi!');
  }
  if (message.content === '@ cortana!') {
    message.reply('Hi!');
  }
      if (message.content.startsWith('c/say')) {
      var reply = message.content.slice(6);
        message.channel.sendMessage(reply);
    }
	      if (message.content.startsWith('c/search')) {
      var reply = message.content.slice(9);
        message.channel.sendMessage('```http://lmgtfy.com/?s=b&q='+reply+'```');
    }
		      if (message.content.startsWith('c/disco')) {
      var reply = message.content.slice(8);
        message.channel.sendMessage('```http://disco.fleo.se/'+reply+'```');
    }
		      if (message.content.startsWith('c/osu')) {
      var reply = message.content.slice(6);
        message.channel.sendMessage('```http://osu.ppy.sh/u/'+reply+'```');
    }
  if (message.content === '@ cortana') {
    message.reply('Hi!');
  }
  if (message.content === '@ Cortana!') {
    message.reply('Hi!');
  }
  if (message.content === '@ ok google') {
    message.reply('Google is ok, but not now!');
  }
  if (message.content === '@ Ok google') {
    message.reply('Google is ok, but not now!');
  }
  if (message.content === '@ Ok Google') {
    message.reply('Google is ok, but not now!');
  }
if (message.content === '@ im best') {
    message.reply('yee nigga');
  }
if (message.content === '@ Im best') {
    message.reply('yee nigga');
  }
 
// avatar
  if (message.content === '@ What is my avatar') {
    // send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
 if (message.content === '@ what is my avatar') {
    // send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
  if (message.content === '@ What is my avatar?') {
    // send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
  if (message.content === '@ what is my avatar?') {
    // send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
  if (message.content === 'What is my avatar') {
    // send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
// koniec
  if (message.content === '@ ping') {
    message.reply('pong');
  }
  if (message.content === '@ Hi.') {
    message.reply('Hi there.');
  }
 if (message.content === '@ hi.') {
    message.reply('Hi there.');
  }
 if (message.content === '@ hi') {
    message.reply('Hi there.');
  }
 if (message.content === '@ Hi') {
    message.reply('Hi there.');
  }
 if (message.content === '@ hey cortana') {
    message.reply('Hi there.');
  }
 if (message.content === '@ Hey cortana') {
    message.reply('Hi there.');
  }
 if (message.content === '@ Hey Cortana.') {
    message.reply('Hi there.');
  }
if (message.content === '@ Hey Cortana') {
    message.reply('Hi there.');
  }
 if (message.content === '@ Do you like me?') {
    message.reply('Yes, of course.');
  }
 if (message.content === '@ do you like me?') {
    message.reply('Yes, of course.');
  }
 if (message.content === '@ do you like me') {
    message.reply('Yes, of course.');
  }
  if (message.content === '@ How old are you?') {
    message.reply('Well, my birthday is April 2 2014, so I m really a spring chicken. Except I m not a chicken.');
  }
 if (message.content === '@ how old are you?') {
    message.reply('Well, my birthday is April 2 2014, so I m really a spring chicken. Except I m not a chicken.');
  }
 if (message.content === '@ how old are you') {
    message.reply('Well, my birthday is April 2 2014, so I m really a spring chicken. Except I m not a chicken.');
  }
 if (message.content === '@ Who created you?') {
    message.reply('Well now, I cant give away all my secrets...');
  }
 if (message.content === '@ who created you?') {
    message.reply('Well now, I cant give away all my secrets...');
  }
 if (message.content === '@ Who created you') {
    message.reply('Well now, I cant give away all my secrets...');
  }
 if (message.content === '@ who created you') {
    message.reply('Well now, I cant give away all my secrets...');
  }
 if (message.content === '@ Hi Siri!') {
    message.reply('Shirlay, you not Siri-ous.');
  }
 if (message.content === '@ hi Siri!') {
    message.reply('Shirlay, you not Siri-ous.');
  }
 if (message.content === '@ hi siri') {
    message.reply('Shirlay, you not Siri-ous.');
  }
 if (message.content === 'c/info') {
    message.reply('Cortana, version 0.5 alpha. Cortana name, logo and other things associated with Cortana belong to Microsoft. http://vistafan12.eu');
  }
 if (message.content === '@ Happy birthday.') {
    message.reply('Thank you so much! That is so nice of you! But... todays not my birthday.');
  }
 if (message.content === '@ happy birthday') {
    message.reply('Thank you so much! That is so nice of you! But... todays not my birthday.');
  }
 if (message.content === '@ Happy birthday!') {
    message.reply('Thank you so much! That is so nice of you! But... todays not my birthday.');
  }
   if (message.content === 'c/invatelink') {
    message.reply('https://discordapp.com/oauth2/authorize?client_id=277114990572470272&scope=bot&permissions=bot');
  }
 if (message.content === '@ BuzzFeed') {
    message.reply('sucks');
  }
 if (message.content === '@ does buzzfeed suck?') {
    message.reply('Yes, absolutely.');
  }
 if (message.content === '@ Fuck you') {
    message.reply('kys');
  }
   if (message.content === '@ Cortana, meet your grandpuppy.') {
    message.reply('https://cdn.discordapp.com/attachments/258769622847717376/277173686216294401/unknown.png');
  }
 if (message.content === '@ valy jean') {
    message.reply('No please, dont remind me of him');
  }
 if (message.content === '@ valy jean is the best') {
    message.reply('You`re kidding me.');
  }
 if (message.content === '@ When is next WNR by fean coming?') {
    message.reply('Around one eternity later');
  }
 if (message.content === '@ fuck') {
    message.reply('I`m only a virtual assistant.');
  }
});

client.login('token');
