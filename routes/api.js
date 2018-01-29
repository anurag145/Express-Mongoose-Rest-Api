const express = require('express');
const router = express.Router();
const httpStatus= require('http-status');
const getRoute=require('./get.route');
const authRoute=require('./auth.route');
router.use('/rest',getRoute);
router.use('/auth',authRoute);
router.post('/rest',function(request,response,next){
  /* rest.create(request.body).then(function(rest){
response.send(rest);


  }).catch(next);

   */

});

router.put('/rest/:id',function(request,response,next){
  /* 
  rest.findByIdAndUpdate({_id:request.params.id},request.body).then(function(){
   rest.findOne({_id:request.params.id}).then(function(rest){
     
   response.send(rest);

   });

   });
   */

});

router.delete('/rest/:id',function(request,response,next){
   /*console.log(request.params.id);
   rest.findByIdAndRemove({_id:request.params.id}).then(function(rest){
    response.send(rest);
   });
   */
});

module.exports = router;