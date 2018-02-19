'use strict';

function logger(req,res,next) {
	console.log('We have a new request for: %s %s %s', new Date(), req.method, req.url);
	next();
}

module.exports = function(app) {
	app.use(logger);

	app.get('/', function(req, res, next) {
		res.render('index.ejs');
	})

	app.get('/:map/:conent', function(req,res,next) {
		console.log(req.map);
		next();
	});
}