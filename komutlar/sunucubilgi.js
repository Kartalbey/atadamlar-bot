const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0xDF01A5)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
        .addField('İsmi:', message.guild.name, true)
    .addField('Kimliği:', message.guild.id, true)
    .addField('Bölgesi:', message.guild.region, true)
    .addField('Sahibi:', message.guild.owner, true)
    .addField('Üyeler:', `${message.guild.members.filter( member => member.user.bot).size} bot / ${message.guild.memberCount} üye`, true)
    .addField('Varsayılan rol:', message.guild.defaultRole, true)
    .addField('Kanallar:', `${message.guild.channels.filter(chan => chan.type === 'voice').size} sesli / ${message.guild.channels.filter(chan => chan.type === 'text').size} metin`, true)
    .addField('Kanal sayısı:', message.guild.channels.size, true)
    .addField('AFK kanalı:', message.guild.afkChannel, true)
    .addField('Oluşturma tarihi:', message.guild.createdAt, true)
    .setFooter('Sunucu bilgi', message.guild.iconURL)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi','server','sinfo'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
