const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "459698010473889813";
	var channelID = "484779276114067467";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doðru kullaným: **?öneri <mesaj>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanýcý:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Öneriniz alýnmýþtýr! Teþekkür ederiz.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "bot hakkýndaki önerilerinizi bot sahiplerine ulaþtýrýr", 
  usage: 'öneri <mesaj>' 
};