
const { MessageEmbed } = require("discord.js");
const Data = require("../../models/User")
module.exports ={
name:"addbadge",
run: async (client, message, args) => {


    if (client.config.owner.includes(message.author.id)) {
    
    
        let member = message.mentions.members.first()|| message.guild.members.cache.get(args[0]);
    
        let Member = await Data.findOne({ memberID: member.user.id });
        if (!Member) { Member =  await Data.create({ memberID: member.user.id }); }
        
        if(!args[1]){
        
            return message.reply(`Options are dev,owner,badge,premium,suppoter,bug`)
        }
        if(args[1] ==="dev"){
        
        Member.badge.dev = true;
        await Member.save();
        
        return message.reply(`added dev badge to that member`)
        
        
        }else if(args[1] ==="owner"){
        
            Member.badge.owner = true;
            await Member.save();
            
            return message.reply(`added owner badge to that member`)
            
            
            }else if(args[1] ==="premium"){
        
                Member.badge.premium = true;
                await Member.save();
                
                return message.reply(`added premium badge to that member`)
                } else if(args[1] ==="suppoter"){
        
                    Member.badge.supporter = true;
                    await Member.save();
                    
                    return message.reply(`added suppoter badge to that member`)
                    
                    
                    }else if(args[1] ==="bug"){
        
                        Member.badge.dev = true;
                        await Member.save();
                        
                        return message.reply(`added bug hunter badge to that member`)
                        
                        
                        }else{
                            return message.reply(`Invaild Options`)
                        }
                        
            
        
    
    
    
    
    
    }}}