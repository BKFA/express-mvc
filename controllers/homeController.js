var Document = require('../models/document');

exports.index = function(req, res, next){
    Document.find().then(function(data){
		res.jsonp({
			title: 'Trang chủ',
			document: data
		});
		console.log(data);
	});
}