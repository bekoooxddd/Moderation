const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/790999702765961258/791775226186563635/6faf3b2ff385f75cc6b46e61e60c1979.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `m!botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `m!davet`= **Yazarak Botun Davet Linkini Alırsınız. \n `**Thanos ❤️ Midnights**"
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 
:white_small_square: | **m!eğlence:** Eğlence Menüsüne Bakarsınız.
:white_small_square: | **m!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:white_small_square: | **m!logomenü:** Botun Logo YAPMA Komutlarına Bakarsınız.


`)



    .addField(
      ` :boom: Bilgilendirme`,
      `
:white_small_square: | **M İ D N İ G T S Her Gün Güncelleniyor!**.
:white_small_square: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `**:boom:➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/9gyHJAjzt7) \n >  » [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=824577399218765875&scope=bot&permissions=0) \n > »[Developer instagram:**brkygalibaaq**](https://www.instagram.com/brkygalibaaq/) `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
