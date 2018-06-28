var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documentSchema = new Schema({
	name: String,
	author: String
}, {timestamps: true}, {collection: 'document'});

module.exports = mongoose.model('document', documentSchema);
