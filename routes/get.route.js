const express = require('express');
const rest = require('../models/rest.js');
const router = express.Router();
router.get('/login',function(request,response,next){
    console.log('I am here');
    /*
     rest.geoNear(
        {type :'Point',coordinates:[parseFloat(request.query.lng),parseFloat(request.query.lat)]},
        {maxDistance: 100000,spherical:true}
  
         ).then(function(ninja){
  
             response.send(ninja);
         });
  */
  });

  module.exports = router;