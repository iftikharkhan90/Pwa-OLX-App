var  MessageModel = require('../model/SendMessage');


function addMessage(req,res){
   var newMessage =new MessageModel();
   console.log(req.body);
   newMessage.buyerName = req.body.buyerName;
   newMessage.buyerPhone = req.body.buyerPhone;
   newMessage.buyerEmail = req.body.buyerEmail;
   newMessage.buyerMessage = req.body.buyerMessage;
   newMessage.clickedPostId = req.body.clickedPostId;
   

   newMessage.save((err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    else{
  
res.json("Data has been saved")

  }})
}

module.exports = addMessage;