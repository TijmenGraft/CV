function logger(req, res, next) {
	console.log(req);
	console.log('We have a new request for: %s \t %s \t %s \t %s', new Date(), req.method, req.url);
	console.log(req.headers);
	console.log(req.referer);
	next();
}

function checkToken(req, res, next) {
	console.log('currently checking for correct csrf token');
	console.log(req.body);
	if(req.body.token === "testtoken") {
		console.log("token accepted");
		next();
	} else {
		var err = new Error();
		err.status = 403;
		res.status(403);
	}
}

module.exports = function(app) {
	app.use(logger);
	app.use(checkToken);

	app.use('/main', function(req, res, next) {
		console.log('/ route');
		res.render('index.ejs', {'some data': 'some values'}, function(err,html) {
			res.send(html)
		});
	})

	app.get('/:map', function(req, res,next) {
		console.log('/:map route');
		console.log(req.params.map);
	})

	app.get('/:map/:content', function(req,res,next) {
		console.log('/:map/:content route');
		console.log(req.params.map);
		next();
	});
}