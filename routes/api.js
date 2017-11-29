const express = require('express');
const Peddler = require('../models/peddler.js');
const router = express.Router();



router.get('/peddler',function(request,response){
   response.send({type: 'GET'});

});

router.post('/peddler',function(request,response){
  Peddler.create(request.body).then(function(peddler){
response.send(peddler);


  });

   

});

router.put('/peddler/:id',function(request,response){
   response.send({type: 'PUT'});

});

router.delete('/peddler/:id',function(request,response){
   response.send({type: 'DELETE'});

});

module.exports = router;