const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const peddlerSchema = new Schema({

name : {
    type:String,
    required:[true,"Name field is required"]	 
},

num : {

	type: String
}
//this will form basis

});

const Peddler = mongoose.model('peddler', peddlerSchema);
module.exports = Peddler;