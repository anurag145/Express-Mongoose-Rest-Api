const express = require('express');

const router = express.Router();
const httpStatus= require('http-status');
const getRoute=require('./get.route');
const authRoute=require('./auth.route');
router.use('/peddler',getRoute);
router.use('/auth',authRoute);
router.post('/peddler',function(request,response,next){
  /* Peddler.create(request.body).then(function(peddler){
response.send(peddler);


  }).catch(next);

   */

});

router.put('/peddler/:id',function(request,response,next){
  /* 
  Peddler.findByIdAndUpdate({_id:request.params.id},request.body).then(function(){
   Peddler.findOne({_id:request.params.id}).then(function(peddler){
     
   response.send(peddler);

   });

   });
   */

});

router.delete('/peddler/:id',function(request,response,next){
   /*console.log(request.params.id);
   Peddler.findByIdAndRemove({_id:request.params.id}).then(function(peddler){
    response.send(peddler);
   });
   */
});

module.exports = router;