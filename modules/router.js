function logger(res,req,next) {
	console.log('We have a new request for: %s', req);
	next();
}

module.exports = function(app) {
	app.use(logger);

	app.get('/:map/:conent', function(res,req,next) {
		console.log(req.map);
		next();
	});
}