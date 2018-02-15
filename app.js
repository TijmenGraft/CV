const express = require('express');
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');
const path = require('path');
const ejs = require('ejs');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(
    sass({
		src: path.join(__dirname, '/sass'),
		dest: path.join(__dirname, 'client/css'),
		debug: true,
		indentedSyntax: false,
		prefix: '/css'
	})		
);

app.use(express.static(__dirname + '/client')); 

require('./modules/router')(app);

var server = app.listen('80', function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server is listening on %s:%s", host, port);
});