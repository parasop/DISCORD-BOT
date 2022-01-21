module.exports.run = async (client) => {
const { MessageEmbed } = require("discord.js")

  console.log(`[API] ${client.user.username} is ready with ${client.guilds.cache.size} server`);
 
    setInterval(() => {
      const statuses = [
        `>help`,
        `+india's pride `,
        `24/7 vc`,
        `v2.0.0`,
      ];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: "LISTENING" });
    }, 60000);



  };

