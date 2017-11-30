const express = require('express');
const Peddler = require('../models/peddler.js');
const router = express.Router();



router.get('/peddler',function(request,response,next){
   
   Peddler.geoNear(
      {type :'Point',coordinates:[parseFloat(request.query.lng),parseFloat(request.query.lat)]},
      {maxDistance: 100000,spherical:true}

   	).then(function(ninja){

   		response.send(ninja);
   	});

});

router.post('/peddler',function(request,response,next){
  Peddler.create(request.body).then(function(peddler){
response.send(peddler);


  }).catch(next);

   

});

router.put('/peddler/:id',function(request,response,next){
   Peddler.findByIdAndUpdate({_id:request.params.id},request.body).then(function(){
   Peddler.findOne({_id:request.params.id}).then(function(peddler){
     
   response.send(peddler);

   });

   });
   

});

router.delete('/peddler/:id',function(request,response,next){
   //console.log(request.params.id);
   Peddler.findByIdAndRemove({_id:request.params.id}).then(function(peddler){
    response.send(peddler);
   });
   
});

module.exports = router;