const Discord = require('discord.js');

exports.run = async (client, message, args, guild) => {
         let mesaj = args.join(' ');
     if (mesaj.length < 1) return message.channel.send(`Lütfen ne çekilişi olucağını yazarmısın.`);
     message.channel.send(`Çekiliş yapıldı.`)  
  
  const cek = new Discord.RichEmbed()
  .setTitle(`${message.author.tag} Adlı kullanıcının çekilişi`)
  .addField('Ödül:', `${mesaj}`)
  .addField('Kazanan:', `${message.guild.members.random().displayName}`) 
  .setFooter('Çekiliş yapıldı.')
  .setColor('RANDOM')
message.channel.send(cek)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş',
  description: '',
  usage: ''
};