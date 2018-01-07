const express = require('express');
const router = express.Router();
const passport = require('passport');
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}),function(request,response,next){
 console.log("I am here hello");
});

router.get('/google/redirect', 
  passport.authenticate('google', { failureRedirect: '/logintest' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
module.exports=router;