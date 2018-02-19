function logger(req, res, next) {
	console.log('We have a new request for: %s \t %s \t %s', new Date(), req.method, req.url);
	next();
}

module.exports = function(app) {
	app.use(logger);

	app.get('/:map', function(req, res,next) {
		console.log(req.params.map);
		next();
	});

	app.get('/:map/:conent', function(req, res, next) {
		console.log(req.params.map);
		next();
	});
}