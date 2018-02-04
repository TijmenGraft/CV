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
		src: path.join(__dirname, 'public/stylesheets/sass'),
		dest: path.join(__dirname, 'public/stylesheets'),
		debug: true,
		indentedSyntax: true,
		outputStyle: 'compressed',
		prefix: '/stylesheets'
	})		
);

app.use(express.static(__dirname + '/client')); 

app.get('/', function(req,res) {
	res.send("hello world");
})

var server = app.listen(process.env.PORT, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server is listening on %s:%s", host, port);
});