const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .setTitle("<a:poliss:502486674844942336>Komutlar <a:polis:502486675449184266> ")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Hoşgeldin Mesajı Aktif Etme**",  ` .kur Komutuyla Gerekli Kanalları Oluşturun.`)
    .addField(":headphones: **Müzik komutları eklendi**  ", `.çal <müzik>`)
  .addField(" **Eğlence komutları için ** **[.1]**", `Eğlence Komutlarını Gösterir. (.eğlence) `)
  .addField(" **Eğlence komutları 2 için ** **[.4]**", `Eğlence Komutlarının Devamını Gösterir. (.eğlence2) `)
  .addField(" **Yetkili komutları için [.2]**", `Yetkili Komutlarını Gösterir. (.yetkili) `)
  .addField(" **Ana komutlar için** **[.3]**", `Ana Komutları Gösterir. (.anakomutlar) `)
  .addField("**Komutlar Hakkında Daha Fazla Bilgi Almak İçin**", `http://huseyinaliyigit.ml/`)
  .addField("**Discord Sunucumuz:**",`https://discord.gg/HJswH7E`)
  .addField("**Tavsiyelerizi Bildirmek İçin `.tavsiye` Komutunu Kullanınız.** ",`https://www.youtube.com/c/karmakarisiktv27`)

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
    message.react('✅')
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
