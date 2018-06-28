var Document = require('../models/document');

exports.index = function(req, res, next){
	console.log(Document.find());
    Document.find().then(function(data){
		res.render('index',{
			title: 'Trang chủ',
			document: data
		});
		console.log(data);
	});
}