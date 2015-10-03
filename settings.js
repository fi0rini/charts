"use strict";
let extend	= require('extend');

let defaults 	= {
	port:   "9000" ,
	base:   __dirname,
    raw:    __dirname + '/web',
    dev:    __dirname + '/dist'
};

module.exports	= function(options){
	return extend(true, defaults, options);
};
