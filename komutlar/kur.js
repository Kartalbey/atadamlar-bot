const Discord = require('discord.js');


exports.run = (client, message, params) => {


        message.channel.send(':1234: **Şakir Botu için gerekli şeyler kuruluyor...**');

        message.guild.createChannel('mod-log');
        message.guild.createChannel('giriş-çıkış');

        message.channel.send(':white_check_mark: **Herşey Kuruldu**');

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kur',
  description: 'Bot için gerekli ayarları kurar.',
  usage: '.kur'
};
