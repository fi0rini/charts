var fs 			= require('fs');
var split 		= require('split');

var skip = 1;
var ElementAttributes 	= {
	Dataset: {}
};


fs.createReadStream("Combined_ElementDetails_Full.txt")
	.pipe(split())
	.on('data', function(data){
			data = data.replace(/\'/g, "");
			var line = data.split('|')
				   line.pop();
			
			console.log(line.join(","));
	})
	.on('end', function(){
		fs.writeFileSync('output.json', JSON.stringify(ElementAttributes));
	});
	

