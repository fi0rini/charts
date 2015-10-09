"use strict";
let extend	= require('extend');
let path 	= require('path');

let defaults 	= {
	port:   "9000" ,
	base:   __dirname,
    web:    __dirname + path.sep + 'web',
    dev:    __dirname + path.sep + 'dist'
};

module.exports	= function(options){
	return extend(true, defaults, options);
};
