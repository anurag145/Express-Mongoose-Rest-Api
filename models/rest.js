const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const restSchema = new Schema({

name : {
    type:String,
    required:[true,"Name field is required"]	 
},

email : {

	type: String
}
//this will form basis

});

const rest = mongoose.model('rest', restSchema);
module.exports = rest;