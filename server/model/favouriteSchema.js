const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

var FavouriteAds = new mongoose.Schema(
    {
       
        email: {
            type: String,
            required: "email is required"
        },
        postID:{
            type: mongoose.Schema.Types.ObjectId,
             ref :'PsotDetail',
             required: true
        },
      
       

    },
    {
        timestamps: true,
    }
);

// DonorInfoSchema.methods.encryptPassword = ()=>{
//     return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null)
// }
// DonorInfoSchema.methods.validPassword = (password)=>{
//     return bcrypt.compareSync(password,this.password)
// }
  module.exports = mongoose.model('Favourite', FavouriteAds, )