function logger(req, res, next) {
	console.log('We have a new request for: %s \t %s \t %s \t %s', new Date(), req.method, req.url);
	console.log(req.headers.user-agent);
	next();
}

module.exports = function(app) {
	app.use(logger);

	app.get('/', function(req, res, next) {
		res.render('index.ejs');
	})

	app.get('/:map', function(req, res,next) {
		console.log(req.params.map);
	})

	app.get('/:map/:conent', function(req,res,next) {
		console.log(req.map);
		next();
	});
}