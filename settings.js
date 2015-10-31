let extend	= require('extend');
let path 	= require('path');
let fs = require('fs');


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
    list: 	((location) => {
    	return fs.readdirSync(location)
    		.filter((_path) => fs.statSync(location + path.sep + _path).isDirectory())
    		.map( (_path) => '/' + _path );

    }('./data'))
};

module.exports	= (options) => extend(true, defaults, options);
