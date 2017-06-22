/// Old Cortana - based in Discorddie
 var Discordie = require('discordie');

  const Events = Discordie.Events;
  const client = new Discordie();

  client.connect({
  token: 'token_here_;)'
  });

  client.Dispatcher.on(Events.GATEWAY_READY, e => {
    console.log('connected as: ' + client.User.username);
    });
  require('events').EventEmitter.prototype._maxListeners = 100;
  var game = {name: "cortana.com.pl"}; // sets game as "Playing with code"
client.User.setGame(game); // playing
client.User.setGame("cortana.com.pl"); // playing
  client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
// conversation 
  if (e.message.content == '@ Hi!') {
    e.message.channel.sendMessage('Hi there.');
    }
if (e.message.content == '@ How old are you?') {
    e.message.channel.sendMessage('Well, my birthday is April 2 2014, so I m really a spring chicken. Except I m not a chicken.');
    }
if (e.message.content == '@ how old are you?') {
    e.message.channel.sendMessage('Well, my birthday is April 2 2014, so I m really a spring chicken. Except I m not a chicken.');
    }
if (e.message.content == '@ Do you like me?') {
    e.message.channel.sendMessage('Yes, of course.');
    }
if (e.message.content == '@ do you like me?') {
    e.message.channel.sendMessage('Yes, of course.');
    }
if (e.message.content == '@ do you like me') {
    e.message.channel.sendMessage('Yes, of course.');
    }
if (e.message.content == '@ Do you like Wasted TV?') {
    e.message.channel.sendMessage('No.');
    }
if (e.message.content == '@ How old are you') {
    e.message.channel.sendMessage('Well, my birthday is April 2 2014, so I m really a spring chicken. Except I m not a chicken.');
    }
if (e.message.content == '@ Who created you?') {
    e.message.channel.sendMessage('Well now, I cant give away all my secrets...');
    }
if (e.message.content == '@ who created you?') {
    e.message.channel.sendMessage('Well now, I cant give away all my secrets...');
    }
if (e.message.content == '@ hi cortana') {
    e.message.channel.sendMessage('Hi there.');
    }
if (e.message.content == '@ who created you') {
    e.message.channel.sendMessage('Well now, I cant give away all my secrets...');
    }
if (e.message.content == '.cortana') {
    e.message.channel.sendMessage('Cortana, version 0.2 alpha. Cortana name, logo and other things associated with Cortana belong to Microsoft. http://vistafan12.pl / http://cortana.com.pl');
    }
 if (e.message.content == '@ Happy birthday.') {
    e.message.channel.sendMessage('Thank you so much! That is so nice of you! But... todays not my birthday.');
    }
 if (e.message.content == '@ Happy birthday!') {
    e.message.channel.sendMessage('Thank you so much! That is so nice of you! But... todays not my birthday.');
    }
 if (e.message.content == '@ happy birthday') {
    e.message.channel.sendMessage('Thank you so much! That is so nice of you! But... todays not my birthday.');
    }
if (e.message.content == '@ How are you?') {
    e.message.channel.sendMessage('Great, thanks.');
    }
if (e.message.content == '@ how are you?') {
    e.message.channel.sendMessage('Great, thanks.');
    }
if (e.message.content == '@ how are you') {
    e.message.channel.sendMessage('Great, thanks.');
    }
  if (e.message.content == '@ Hi') {
    e.message.channel.sendMessage('Hi there.');
    }
  if (e.message.content == '@ What is your favourite food?') {
    e.message.channel.sendMessage('I do not have a favorite food. I am a bot.');
    }
if (e.message.content == '@ what is your favourite food?') {
    e.message.channel.sendMessage('I do not have a favorite food. I am a bot.');
    }
if (e.message.content == '@ what is your favourite food') {
    e.message.channel.sendMessage('I do not have a favorite food. I am a bot.');
    }
 if (e.message.content == '@ hi') {
    e.message.channel.sendMessage('Hi there.');
    }
 if (e.message.content == '@ hi?') {
    e.message.channel.sendMessage('Hi there.');
    }
 if (e.message.content == '@ Hi?') {
    e.message.channel.sendMessage('Hi there.');
    }
  if (e.message.content == '@ Hi Siri!') {
    e.message.channel.sendMessage('Shirlay, you not Siri-ous.');
    }
  if (e.message.content == '@ Hi Siri.') {
    e.message.channel.sendMessage('Shirlay, you not Siri-ous.');
    }
if (e.message.content == '@ hi siri') {
    e.message.channel.sendMessage('Shirlay, you not Siri-ous.');
    }
if (e.message.content == '@ hi siri.') {
    e.message.channel.sendMessage('Shirlay, you not Siri-ous.');
    }
  if (e.message.content == '@ Hello!') {
    e.message.channel.sendMessage('Hi there.');
    }
if (e.message.content == '@ hello!') {
    e.message.channel.sendMessage('Hi there.');
    }
if (e.message.content == '@ hello') {
    e.message.channel.sendMessage('Hi there.');
    }
if (e.message.content == '@ Hello.') {
    e.message.channel.sendMessage('Hi there.');
    }
  if (e.message.content == '@ What your favorite color?') {
    e.message.channel.sendMessage('Right now, is ultraviolet.');
    }
  if (e.message.content == '@ Windows 10') {
    e.message.channel.sendMessage('`Windows 10 is a personal computer operating system developed and released by Microsoft as part of the Windows NT family of operating systems. It was officially unveiled in September 2014 following a brief demo at Build 2014. The first version of the operating system entered a public beta testing process in October, leading up to its consumer release on July 29, 2015.` *from wikipedia.org*');
    }
 if (e.message.content == '@ When you say something in Polish?') {
    e.message.channel.sendMessage('I say, when will this time.');
    }
if (e.message.content == '@ when you say something in Polish?') {
    e.message.channel.sendMessage('I say, when will this time.');
    }
//end
  });
