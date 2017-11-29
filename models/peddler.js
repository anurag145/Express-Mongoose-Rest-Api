const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peddlerSchema = new Schema({

name : {
    type:String,
    required:[true,"Name field is required"]	 
},

number : {

	type: String
}

//this will form basis

});

const Peddler = mongoose.model('ninja', peddlerSchema);
module.exports = Peddler;