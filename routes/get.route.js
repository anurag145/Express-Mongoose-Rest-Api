const express = require('express');
const Peddler = require('../models/peddler.js');
const router = express.Router();
router.get('/login',function(request,response,next){
    console.log('I am here');
    /*
     Peddler.geoNear(
        {type :'Point',coordinates:[parseFloat(request.query.lng),parseFloat(request.query.lat)]},
        {maxDistance: 100000,spherical:true}
  
         ).then(function(ninja){
  
             response.send(ninja);
         });
  */
  });

  module.exports = router;