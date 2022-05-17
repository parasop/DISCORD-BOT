const mongoose = require('mongoose')
const User= mongoose.Schema({
    userId: String,
   count:{type:Number,default:0}

})

module.exports = mongoose.model("user", User)