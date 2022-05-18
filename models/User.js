const mongoose = require('mongoose')
const User= mongoose.Schema({
    userId: String,
   count:{type:Number,default:0},
   badge: {
    dev :{type:Boolean,default:false},
    owner :{type:Boolean,default:false},
    suppoter :{type:Boolean,default:false},
    bug :{type:Boolean,default:false},
    premium:{type:Boolean,default:false},
    }

})

module.exports = mongoose.model("user", User)