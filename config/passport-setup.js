const passport=require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys= require('./keys.js');
passport.use(
    new GoogleStrategy({
        callbackURL:'/api/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
        
    },function(accessToken, refreshToken, profile, cb) {
        console.log(profile);
        return cb(null, profile);
      }
    ));