var mongoose = require('mongoose');
var AddpostSchema = mongoose.Schema(
    // {
    //     timestamps: true,
    // },  
    {
    adTitle: String,
    
    itemCondition:String,
    itemPic:String,
    price:Number,
    city:String,
    itemDetails:String,
    catogary:String,
    sellerPhone:Number,
    sellerEmail:String,
    user:String,
},

);

var feedBackModels = mongoose.model('PsotDetail', AddpostSchema)
module.exports =feedBackModels;