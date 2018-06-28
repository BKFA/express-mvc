var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documentSchema = new Schema({
<<<<<<< HEAD
	name: String,
	author: String
}, {timestamps: true}, {collection: 'document'});

module.exports = mongoose.model('document', documentSchema);
=======
	// _id: { 
 //    	type: 'String',
 //    	default: function() { 
 //    		return new Date().getTime().toString(8)
 //    	} 
 //    },
	poster: String,
	categories: [{
		type: String
	}],
	title: String,
	desc: String,
	url: String,
	content: String,
	tag: [{
		type: String
	}],
	view: {type: Number, default: 0},
	status: String //Highlights, Normal
}, {timestamps: true});

// documentSchema.virtual('id').get(function() {
//     return this._id.toHexString();
// });

module.exports = mongoose.model('Document', documentSchema);
>>>>>>> dea75721f83630bb1b66a9c4edc17b48652786ec
