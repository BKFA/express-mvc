var Document = require('../models/document');

exports.index = function(req, res, next){
	//Use Document model at here
	// var query = Document.find();

	// query.exec(function(err, docs) {
	// 	console.log(docs);
 //        res.render('index', {
 //            title: 'Trang chủ',
 //            document: docs
 //        });
 //    });

    Document.find().then(function(document){
		res.render('index',{
			title: 'Trang chủ',
			document: document
		});
		console.log(document);
	});
}