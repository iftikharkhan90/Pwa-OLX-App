
const router = require("express").Router()
var donorDetails = require('../controllers/DonorController');
var passport = require('passport');
var User = require('../model/UserSchema');
var PostSchema = require('../model/adPostSchema');
var MessgaedetailSchema = require('../model/SendMessage');
var Favourite = require('../model/favouriteSchema')



router.post('/registerForm', donorDetails);
router.post('/checkEmail', (req, res) => {
    
    User.findOne({ email: req.body.inputEmailField }, function (err, user) {
        console.log(user)
        if (err) { res.end(err) }

        if (!user) {
            res.status(200);
            res.json("email not in use");
        }
        else {
            res.status(200);
            res.json("email is already in use");
        }

    });


});




router.post('/loginform', passport.authenticate('local'), (req, res) => {

    if (req.isAuthenticated()) {
        res.status(200);
        res.json(req.user);
    }
    else {
        res.status(500);
        res.json("Your email or password is wrong")
    }
})

// get userData


router.get('/getUserData', (req, res) => {

console.log(req.query);
    PostSchema.find({ catogary: req.query.category }, (err, data) => {
        if (data) {
            res.json(data);
        } else {
            res.send([])
        }
    })



});
router.post('/add', (req, res) => {
    
    var addPost = new PostSchema();
    addPost.adTitle = req.body.adTitle;
    addPost.itemCondition = req.body.itemCondition;
    addPost.price = req.body.price;
    addPost.city = req.body.city;
    addPost.itemDetails = req.body.itemDetails;
    addPost.itemPic = req.body.itemPic;
    addPost.catogary = req.body.catogary;
    addPost.sellerPhone = req.body.sellerPhone
    addPost.user = req.body.user
    addPost.sellerEmail = req.body.sellerEmail

    addPost.save((err, user) => {
        if (err) {
            res.send(200);

        } else {

            res.json(user);
        }
    })
});

//get data
router.get('/panel', function (req, res) {
    PostSchema.find({}, (err, data) => {
        if (data) {
            res.json(data);
        }
    })
}),

    // get Seller Ads


    router.get('/sellerAds', function (req, res) {
        
        PostSchema.find({ sellerEmail: req.query.sellerEmail }, (err, data) => {
            if (data) {
                res.json(data);
            }
        })
    }),

    //get buyer MessageInfo

    router.post('/showMessage', function (req, res) {
       
        MessgaedetailSchema.find({ clickedPostId: req.body.picid }, (err, data) => {
            if (data) {
                res.json(data);
            }
        })
    }),

    // delete Seller Ads


    router.post('/dellAd', function (req, res) {
        
        PostSchema.deleteOne({ _id: req.body.obj }, function (err, deleteFeedback) {
            console.log(deleteFeedback)
            if (err) {
                res.json("there is no feedBack")

            } else {
                res.status(200);

                res.json("document has been deleted");
            }
        })
    }),

    router.post('/logout', (req, res) => {
      
        req.logout()
        res.status(200);
        res.json("succfully lougout");

    });

// Fvt add 


router.post('/addfvt', (req, res) => {
    


    const updateFvtArray = req.body.postid;

    Favourite.findOne({ email: req.body.fvtEmail,postID:req.body.postid  },  function (err, user) {
        console.log(user)
        if (err) {
            res.status(400)
        } if (user) {
            Favourite.deleteOne({email: req.body.fvtEmail,postID:req.body.postid }, function (err, deleteFeedback){
                if(err){
                    res.send(400);
                }else{
                    res.send("removed");
                }
            })
        } else {
            const FavouriteModel = new Favourite();
            FavouriteModel.email = req.body.fvtEmail;
            FavouriteModel.postID = req.body.postid;
            FavouriteModel.save((err, user) => {
                if (err) {
                    res.send(200);
        
                } else {
        
                    res.json("Added");
                }
            })
        }

    });

  
    
});

// show favourite Ads



router.post('/getFvtAd', function (req, res) {
    
    const email = req.body.email;
    Favourite.find({email: email}).populate('postID').exec(function(err, getposts){
        if(err){
            res.status(400);
        }else{
            res.json(getposts);
        }
    })
}),
  

// delete Favourite Ads



router.post('/delFvt', function (req, res) {
    console.log (req.body);
    const postid = req.body.postid;
    Favourite.deleteOne({_id: postid},function(err, del){
        if(err){
            res.status(400);
        }else{
            console.log(del)
            res.json(del);
        }
    })
}),















module.exports = router;

