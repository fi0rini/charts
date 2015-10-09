"use strict";
(function(){
    // some lets
	let settings 	= require('../settings')();
    let dest        = process.argv[2] === "--raw" ?
                        settings.raw :
                        settings.dev ;

	let readdir 	= require('fs').readdirSync;
	let express	    = require('express');
	let appsies 	= express();
	let server 	    = appsies.listen(settings.port);
	// return all directories in pages and dynamically map them
	let pages = readdir( dest + '/pages' )

		// map each path to object {base,path}
		.map( page => ({
			base: '/' + page,
			path: dest + '/pages/' + page
		}));

		// Map static pages
		.forEach( page =>
			appsies.use( page.base, express.static(page.path) ) &&
            process.stdout.write('server page mapped    : ' + page.path + '\n')
		);

	// Configure static directories
	appsies.use('/', 		express.static( dest + '/home'));
	appsies.use('/assets', 	express.static( dest + '/assets'));

	// Let the user know where the server is listening after everything is finished
    process.stdout.write('server started on     : ' + dest + '\n'); 
	process.stdout.write('server listening on   : ' + settings.port + '\n');

}());
