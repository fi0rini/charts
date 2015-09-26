var fs 		= require('fs');
var split 	= require('split');
var file 	= process.argv[2];

fs.createReadStream(file)
	.pipe(split())
	.on('data', function(line) {
		line = line.split('|');
	})
	.on('end', function() {
		console.log('done reading...');
	});
