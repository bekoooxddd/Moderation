const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Bana Oyver ")
  .setDescription("[__**Botlist**__]()")
  .setFooter('Botumuza Oy Verdiğiniz İçin Şimdiden Teşekkür Ederim..')
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyver',
  description: '',
  usage: ''
};