const mongoose = require('mongoose')
const {prefix}= require("../config.json")
const Guild = mongoose.Schema({
    guildId: String,
    prefix: { type: String ,default:prefix}


})

module.exports = mongoose.model("guild", Guild)