
const { MessageEmbed } = require("discord.js");
const Data = require("../../models/User")
module.exports ={
name:"removebadge",
run: async (client, message, args) => {


    if (client.config.owner.includes(message.author.id)) {

        let member = message.mentions.members.first()|| message.guild.members.cache.get(args[0]);

        let Member = await Data.findOne({ userID: member.user.id })|| new Data({ userID: member.user.id }); 
        
        if(!args[1]){
        
            return message.reply(`Options are dev,owner,badge,premium,suppoter,bug`)
        }
        if(args[1] ==="dev"){
        
        Member.badge.dev = false;
        await Member.save();
        
        return message.reply(`removed dev badge to that member`)
        
        
        }else if(args[1] ==="owner"){
        
            Member.badge.owner = false;
            await Member.save();
            
            return message.reply(`removed owner badge to that member`)
            
            
            }else if(args[1] ==="premium"){
        
                Member.badge.premium = false;
                await Member.save();
                
                return message.reply(`removed premium badge to that member`)
                } else if(args[1] ==="suppoter"){
        
                    Member.badge.supporter = false;
                    await Member.save();
                    
                    return message.reply(`removed suppoter badge to that member`)
                    
                    
                    }else if(args[1] ==="bug"){
        
                        Member.badge.dev = false;
                        await Member.save();
                        
                        return message.reply(`removed bug hunter badge to that member`)
                        
                        
                        }else{
                            return message.reply(`Invaild Options`)
                        }
                        




    }}}
