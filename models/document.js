var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documentSchema = new Schema({
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