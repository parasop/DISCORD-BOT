let Guild = require("../models/Guild");
let User = require("../models/User");
module.exports.run = async (client,message) => {

const guild = await Guild.findOne({guildId:message.guild.id});
if(!guild){
   guild = Guild.create({guildId:message.guild.id})
}
//CUSTOM PREFIX
    let prefix =  guild.prefix ||client.config.prefix
//simply ignore bot and dm messages
if (message.author.bot || !message.guild) return;

//if message dont start with prefix return it
if (!message.content.startsWith(prefix)) return;


//if message member not found find from fetch
if (!message.member) message.guild.fetchMembers(message);

//SCLICE FOR REMOVE PREFIX FROM ARGS, trim for remove spaces and split for make content in array
const args = message.content.slice(prefix.length).trim().split(/ +/g);



//take command from args first content example !help mod  taking help from it
const cmd = args.shift().toLowerCase();


//if command lengh is 0 example !  so it will return
if (cmd.length === 0) return;


let command = client.commands.get(cmd)


//finding command from aliases
if (!command) command = client.commands.get(client.aliases.get(cmd))


if (!command) return


let user = await User.findOne({userId:message.author.id});
if(!user)user = await User.create({userId:message.author.id});

user.count++;
await user.save();


if (command) command.run(client, message, args)





}
