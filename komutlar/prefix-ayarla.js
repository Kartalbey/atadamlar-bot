const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":negative_squared_cross_mark: Bunu Yapmak İçin Gerekli Yetkiye Sahip Değilsin!");
  if(!args[0] || args[0 == "yardım"]) return message.reply("Kullanımı: `f!prefix Yeni Ön-Ek`");

  let prefixes = JSON.parse(fs.readFileSync("./sunucuyaözelayarlar/prefix.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./sunucuyaözelayarlar/prefix.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });


  message.channel.send(`Ön-Ek başarıyla \`${args[0]}\` olarak ayarlandı!`)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'prefix-ayarla',
  description: 'Prefix ayarlar / flaiscode - 2018.',
  usage: 'prefix-ayarla'
};
