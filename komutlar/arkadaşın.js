const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://st2.depositphotos.com/1499736/9556/i/950/depositphotos_95566772-stock-photo-man-pointing-finger-at-camera.jpg",
          color: 0xD96857,
		  description: "**La Banane Senin Arkadaşından**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Arkadaşın'],
  permLevel: 0
};

exports.help = {
  name: 'arkadaşın',
  description: 'Arkadasini Bilir',
  usage: 'arkadaşın'
};
