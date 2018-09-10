
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var UserModel = require('../model/UserSchema');



module.exports = function () {



    passport.use(new LocalStrategy({ usernameField: 'email' },
        function (email, password, done) {

            UserModel.findOne({ email: email },function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, null);
                }
                if (user.password != password) {
                    return done(null, null);
                }
                return done(null, user);
            });
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (_id, done) {

        UserModel.findById(_id, function (err, user) {
            done(err, user);
        });
    });
}