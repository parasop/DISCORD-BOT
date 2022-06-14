const {Util}=require("discord.js");
const axios = require("axios").default;
const disocrd = require("discord.js")


module.exports={
    name:"lyrics",
    run:async(client,message,args)=>{

        if(!args.length){
    return message.channel.send({content:"Pleae provide a valid query!"});
        }

        let fetch = await axios.get(`https://api.parasdocs.tech/lyrics?q=${args.join(" ")}`)

        if(fetch.data.error){
            return message.channel.send({content:fetch.data.error})
        }


        let embed = new disocrd.MessageEmbed()
        .setTitle(`${fetch.data.title} - ${fetch.data.artist}`)


        const Lyrics = Util.splitMessage(fetch.data.lyrics,{
            maxLength:2048,
            char:"\n",
            prepend:"",
            append:""
        })
        Lyrics.forEach(x => {
            embed.setDescription(x);
            message.channel.send({embeds:[embed]})
        });
    }
}