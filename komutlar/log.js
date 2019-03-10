const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("././sunucuyaözelayarlar/log.json", "utf8"));

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let channel = message.mentions.channels.first()
    if (!channel) {
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Başarılı!')
        .setDescription(':x: | Kayıt kanalı ayarlamak için .log-ayarla #kanal')
        message.channel.send({embed})
        return
    }
    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            logkanal: channel.id
        };
    }
    fs.writeFile("././sunucuyaözelayarlar/log.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
    const embed = new Discord.RichEmbed()
    .setTitle('Başarılı!')
    .setDescription(`:white_check_mark: | Log kanalı ${channel} olarak ayarlandı.`)
    .setColor('RANDOM')
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'log-ayarla',
    description: 'Log kanalını belirler.',
    usage: 'log-ayarla <#kanal>'
}
