const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const geoSchema = new Schema({

	type:{
         
         type: String,
		default: "Point"
	},
	coordinates:{

		type:[Number],
		index : "2dsphere"
	}
});

const peddlerSchema = new Schema({

name : {
    type:String,
    required:[true,"Name field is required"]	 
},

num : {

	type: String
},

geometry : geoSchema

//this will form basis

});

const Peddler = mongoose.model('peddler', peddlerSchema);
module.exports = Peddler;