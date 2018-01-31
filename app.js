const express = require('express');

var app = express();

app.get('/', function(req,res) {
	res.send("hello world");
})

var server = app.listen(process.env.PORT, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server is listening on %s:%s", host, port);
});