const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy(
    function (email, password, done) {
        getUser.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: "Incorrect Email" });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: "Incorrect Password" });

            }
            return done(null, user);
        });
    }
));

module.exports = passport