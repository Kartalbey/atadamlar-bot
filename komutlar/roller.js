const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
   .addField('Varsayılan rol:', message.guild.defaultRole, true)
   .addField('Roller:', message.guild.roles.map(role => role.name).join(', '), true)
   .setFooter('Şakir Bot', message.guild.iconURL)
   .setTimestamp()
   message.channel.send({embed});
   message.react('✅')
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'roller',
   description: 'Sunucudaki rolleri söyler.',
   usage: 'roller'
 };
