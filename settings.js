let extend	= require('extend');
let path 	= require('path');

let defaults 	= {
	host: '0.0.0.0',
	port:   {
		http:   '8000',
		proxy:  '8001',
		db: 	'27017'
	},
	base:   __dirname,
    web:    __dirname + path.sep + 'web',
    dev:    __dirname + path.sep + 'dist',
    list: 	(function(location) {
    	return require('fs')
    		.readdirSync(location)
    		.filter( function (_path) {
    			return require('fs')
    				.statSync(location + path.sep + _path).isDirectory();
    		})
    		.map( function (_path) {
    			return '/' + _path;
    		});

    }('./data'))
};

module.exports	= function(options){
	return extend(true, defaults, options);
};
