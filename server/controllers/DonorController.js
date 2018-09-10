
var SellerInfo = require('../model/UserSchema');

function DonorDetails (req, res) {
    
    
    const newSeller = new SellerInfo();
    console.log(req.body)
    newSeller.name = req.body.sellerName;
    
    
   
    newSeller.email = req.body.sellerEmail;
    newSeller.password = req.body.sellerPassword;
    
    

   
    
    
    newSeller.save(function (err, newDonor){
            if(err){
                console.log(err);
            }
            console.log(newDonor);
            
            res.json(newDonor)
        })
    
   

}
 
 module.exports = DonorDetails;