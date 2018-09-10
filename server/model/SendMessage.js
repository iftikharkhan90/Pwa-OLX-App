var mongoose = require('mongoose');
var SendMessageSchema = new mongoose.Schema({
    buyerName: String,
    
    clickedPostId:String,
    buyerPhone:Number,
    buyerMessage:String,
    buyerEmail:String,
    
    
   
},
{
    timestamp: true ,
}
);

var MessageModels = mongoose.model('messageDetail', SendMessageSchema)
module.exports =MessageModels;