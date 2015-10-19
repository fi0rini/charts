var settings = require('../settings.js')();
var express  = require('express');
var app 	 = express();
var path 	 = require('path');

var router	 = require('./mongo-router.js');

/*  	API Proxy
 */
settings.list.forEach( function (company) {

	app.use( '/deviceid', function (req, res) {
		// generate a device id for the user if it does not exist
		
	});

	// user endpoint
	app.use( '/users', function (req, res) {
		// do things for user here....
		var requestPath = path.parse(req.url);
		var collection 	= requestPath.dir.split('/')[1];

		res.end(requestPath.dir);
	});

	// companies endpoint
	app.use( '/companies', function (req, res) {
		//  do things for companies here...
		
	})

	// user's charts endpoint
	app.use( company + '/users/' + id, function (req, res) {

	});
});

var server = app.listen(settings.port.proxy, function ( ) {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Proxy server listening at http://%s:%s', host, port);
});


/**
 * AUTHENTICATION RESTful services
 * /authenticate/user/id
 * 
 * USER RESTful services
 *  -- charts --
 * /users/id -> GET a user's info by his/her id
 * /users/id/companies -> GET a list of the user's companies
 * /users/id/companies/id -> SET a company to a user by the companies id
 * /users/id/charts -> GET a list of the users charts
 * /users/id/charts/chartid -> GET/SET a users chart
 * /users/id/challenges -> GET full list of users challenges
 * 
 *  
 *  -- challenges --
 * /company/users/id/challenges -> GET a list of status the users challenges
 * /company/users/id/challenges/id -> SET a challenge status with id
 *
 * COMPANY RESTful services
 * /company -> GET Full list of all companies that exist in the database
 * /company/id -> GET the company's information by id
 * /company/id/roster -> GET the company's roster
 * /company/id/challenges -> GET/SET the companies challenges. return []
 *
 * DEVICE
 * /deviceid -> generate a device id
 *
 * GEO-Location
 * /geolocation -> get the geo location
 *
 * 
 */