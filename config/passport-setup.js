const passport=require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy= require('passport-facebook').Strategy;
const keys= require('./keys.js');
passport.use(
    new GoogleStrategy({
        callbackURL:'/api/auth/googleSuccess',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
        
    },() =>
    {}
)
)
passport.use(
    new FacebookStrategy({
        callbackURL:'/logintest.html',
        clientID:keys.facebook.clientID,
        clientSecret:keys.facebook.clientSecret
        
    },() =>
    {}
)
)