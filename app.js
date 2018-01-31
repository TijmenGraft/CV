const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req,res) {
	res.send("hello world");
})

var server = app.listen(process.env.PORT, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server is listening on %s:%s", host, port);
});