const User = require("../../models/User");
const Discord = require("discord.js");
const { userInfo } = require("os");
module.exports = {
    name: "profile",
    run: async (client, message, args) => {

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])|| message.member;
        let data = await User.findOne({userId:member.id});
        if(!data) data = await User.create({userId:member.id});
        
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`Profile Of ${member.user.username}`)
        .addField(`Command Used`,`${data.count} commands`)
     
     
        message.channel.send({ embeds:[embed] })
    }
  }
  