const User = require('../../models/User');

module.exports={
    name:"blacklist",
    run: async(client,message,args)=>{


        let member = client.users.cache.get(args[0]);
        if(!member) return message.reply(`No member found!`)

        let user = await User.findOne({ userId: member.id }) || new User({ userId: member.id })
   

    user.blacklisted = true;
    await user.save();


    return  message.reply(`User has been blacklisted from bot`)
     
    }
}