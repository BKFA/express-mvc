var Document = require('../models/document');

exports.index = function(req, res, next){
<<<<<<< HEAD
    Document.find().then(function(data){
		res.jsonp({
			title: 'Trang chủ',
			document: data
		});
		console.log(data);
=======
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
>>>>>>> dea75721f83630bb1b66a9c4edc17b48652786ec
	});
}