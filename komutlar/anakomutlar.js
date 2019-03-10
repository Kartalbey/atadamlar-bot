const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .setTitle("**Ana**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**:scales: :Ana Komutlar: :scales:**", ` .reklamtaraması = Oynuyor Yerinde Reklam Yapanları Bulur. \n .ailemiz = Ailemizi Gösterir. \n .yardım = Bot komutlarını atar. \n .bilgi = Bot kendisi hakkında bilgi verir. \n .ping = Bot gecikme süresini söyler. \n .davet = Bot davet linkini atar. \n .istatistik = Bot istatistiklerini söyler. `)

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
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
  aliases: ['ana', 'ak', '3'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'Ana komutları gösterir.',
  usage: 'anakomutlar'
};
