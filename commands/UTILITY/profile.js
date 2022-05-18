const User = require("../../models/User");
const Discord = require("discord.js");
const { userInfo } = require("os");
module.exports = {
    name: "profile",
    run: async (client, message, args) => {
        let cache =[]
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])|| message.member;
        let data = await User.findOne({userId:member.id});
        if(!data) data = await User.create({userId:member.id});
        



        if(data.badge.owner){
            cache.push(`${client.config.emojis.owner} Owner`)
          }
          
          if(data.badge.dev){
            cache.push(`${client.config.emojis.dev} Verified bot developer`)
          }
          
          if(data.badge.premium){
            cache.push(`${client.config.emojis.premium} Premium Holder`)
          }
          
          if(data.badge.suppoter){
            cache.push(`${client.config.emojis.suppoter} Suppoter`)
          }
          if(data.badge.bug){
            cache.push(`${client.config.emojis.bug} Bug Hunter`)
          }
          
          
          
          
          
          if(cache.length ===0){
              cache.push(`You have no achievements in ${client.user.username}! Don't worry [click here](${client.config.server}) to buy premium to get some achievements/badges in ${client.user.username}..`)
          }







        
        let embed = new Discord.MessageEmbed()
        .setColor(client.config.color)
        .setTitle(`Profile Of ${member.user.username}`)
        .addField(`Command Used`,`${data.count} commands`)
        .addField(`Achievments of ${member.user.username}`,cache.join("\n"))
     
        message.channel.send({ embeds:[embed] })
    }
  }
  