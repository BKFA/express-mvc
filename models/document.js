var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documentSchema = new Schema({
	name: String,
	author: String
}, {timestamps: true}, {collection: 'documents'});

module.exports = mongoose.model('documents', documentSchema);