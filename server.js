var express	= require('express');
var app 	= express();

app.use('/', 		express.static(__dirname + '/www'));
app.use('/login', 	express.static(__dirname + '/www/pages/login'))

/** hold all static assets */
app.use('/assets', 	express.static(__dirname + '/www/assets'));


var server 	= app.listen(3000);