const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');


const app = express();


mongoose.connect('mongodb://localhost/peddler');

mongoose.Promise = global.Promise;


app.use(bodyParser.json());
app.use('/api',require('./routes/api'));
app.use(function(error,request, response,next){

   response.status(422).send({error:" Validation error"});
});

app.listen(process.env.port || 4000,function(){

console.log('now listening');
});