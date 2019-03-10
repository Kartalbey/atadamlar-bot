const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Lokasyon/Bölge Bulunamadı...**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} adlı konumdaki hava durumu`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Zaman Dilimi',`UTC${location.timezone}`, true)
          .addField('Derece Tipi',location.degreetype, true)
          .addField('Sıcaklık',`${current.temperature} Derece`, true)
          .addField('Hissedilen Sıcaklık', `${current.feelslike} Derece`, true)
          .addField('Rüzgar',current.winddisplay, true)
          .addField('Nem', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}
module.exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: [],
 permLevel: 0
}
module.exports.help = {
  name:"havadurumu",
 description:"Havadurumu",
usage:"havadurumu [lokasyon]"
}
