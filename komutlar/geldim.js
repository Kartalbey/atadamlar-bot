const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("Afk Modu! \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .addField('Şu Kullanıcı Artık Afk Değil! =>', message.author.username + '#' + message.author.discriminator)
  .setFooter('Şakir', client.user.avatarURL)
  message.delete();
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'geldim',
  description: 'Afk Modundan çıkmanı sağlar.',
  usage: '.geldim'
};
