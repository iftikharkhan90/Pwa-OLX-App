var express = require('express');
var router = express.Router();
var addMessage = require('../controllers/MessageController');
var feedBackModels = require('../model/SendMessage');
var DonorInfo = require('../model/UserSchema');
var nodemailer = require('nodemailer');
/* GET users listing. */
router.post('/', addMessage);
router.post('/panel', function (req, res) {
    feedBackModels.find({}, (err, data) => {
        if (data) {
            res.json(data);
        }
    })
}),
    router.post('/delete', (req, res) => {
        console.log(req.body);

        feedBackModels.deleteOne({ email: req.body.emailTable }, function (err, deleteFeedback) {
            console.log(deleteFeedback)
            if (err) {
                res.json("there is no feedBack")

            } else {
                res.status(200);

                res.json("document has been deleted");
            }
        })

    });
router.post('/checkEmail', (req, res) => {
    console.log(req.body);
    DonorInfo.findOne({ email: req.body.inputEmailField }, function (err, user) {
        console.log(user)
        if (err) { res.end(err) }

        if (!user) {
            res.status(300);
            res.json("email not in use");
        }
        else {
            res.status(200);
            res.json("email is already in use");
        }

    });


});





// 


//notification
router.post('/notification', (req, res) => {
    console.log(req.body);
    console.log(req.body.nameTable);
    console.log(req.body.emailTable);
    
    

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 465,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'aldumdonnor708@gmail.com',
                pass: 'Asim@123' // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
             from: 'aldumdonnor708@gmail.com', // sender address
            to: req.body.emailTable, // list of receivers
            subject: 'Mail from Aldum Donor', // Subject line
            text: `Hi,${req.body.nameTable}! Thanks for your feedback you should register for blood donor in our website.`, // plain text body
            // html: '<b>Hello world?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
        return res.json({'success':true,'message':'Todo added successfully'});
   ;


})



module.exports = router;