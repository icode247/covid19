const bcrypt = require("bcrypt");
const passport = require("passport");
const localStrategy = require("passport-local")
var { User } = require("../../models/userModel")


exports.initializePassportAuthentication = async (passport) => {
    var authenicateUser = (username, password, done) => {
        User.findOne({ username })
            .then((foundUser) => {
                bcrypt.compare(password, foundUser.password)
                    .then((matched) => {
                        if(!matched) return done(null, false)
                        return done(null, foundUser);
                    })
                    .catch((err) => {
                        return done(null, false);
                    })
            })
            .catch((err) => {
                return done(null, false)
            })
    }
    passport.use(new localStrategy(authenicateUser));
    passport.serializeUser((user,done)=>{
        done(null, user.id)
    });
    passport.deserializeUser((id, done)=>{
        User.findById({ _id: id }, (err, user) => {
            return done(err, user)
        })
    })
}
exports.Login = passport.authenticate('local',{
    failureFlash: "Incorrect username or password",
    failureRedirect: '/signin',
    successRedirect: '/patient'
})
exports.LoginPage = (req,res)=>{
    res.render("authentication/authenticate.ejs")
}
exports.Logout = (req,res)=>{
    req.logOut();
    res.json({status:"ok"})
}
module.exports = exports