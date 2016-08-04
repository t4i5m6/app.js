var express = require('express');
var app = express();
var calc = require('./calc');
var fs = require('fs');


app.get('/', function(req, res){
 	//res.write('Hello' + calc.add(8,9));
 	
 	//res.send(fs.readFileSync('./ttt.html', 'UTF-8'));
 	res.sendFile(__dirname + '/static/ttt.html');
});

app.use('/static', express.static(__dirname +'/file'));


app.get('/test', function(req, res){
	res.send('Yes,this is a test');
 //res.send('Hello' + calc.add(8,9))
// >1024
});


app.listen(3000, function(err){
	console.log('Listening pn port 3000');
});