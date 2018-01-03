const express = require('express');
const router = express.Router();
const passport = require('passport');
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

router.get('/googleSuccess',passport.authenticate('google'),(req,res)=>{

});
router.get('/facebook',passport.authenticate('facebook',{
    scope:['profile']
}));
module.exports=router;