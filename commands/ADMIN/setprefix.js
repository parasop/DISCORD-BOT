const Guild = require("../../models/Guild");

module.exports = {
    name: "setprefix",
    run: async (client, message, args) => {

        let guild = Guild.findOne({ guildId: message.guild.id })


        let prefix = args[0];
        if (!prefix) {
            return message.reply(`Provide a valid prefix`);
        }

        if (prefix.length > 3) {
            return message.reply(`Prefix must be less than 3 charcters`)
        }

        guild.prefix = args[0];
        await guild.save();


        return message.channel.send(`Prefix for this guild is seted to ${guild.prefix}`)



    }
}