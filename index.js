const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const httpStatus= require('http-status');
const passportSetup =require('./config/passport-setup');
const app = express();

const Promise=require('bluebird');
mongoose.connect('mongodb://localhost/peddler');

mongoose.Promise = Promise;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api',routes);
app.use(function(error,request, response,next){

  console.log(error);
  //console.log(request);

});
app.listen(process.env.port || 4000,function(){

console.log('now listening');
});