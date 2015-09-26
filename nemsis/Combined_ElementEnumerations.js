var fs 			= require('fs');
var split 		= require('split');

var skip = 1;
var ElementAttributes 	= {
	Dataset: {}
};

var filename = "Combined_ElementEnumerations";

fs.createReadStream(filename + ".txt")
	.pipe(split())
	.on('data', function(data){
		if(skip++ !== 1){
			data = data.replace(/\'/g, "");	
		
			var line = data.split('|')
		    	    line.pop();
	
			var DatasetName 	= line[0];
			var ElementNumber 	= line[1];
			var ElementName		= line[2];
			var Code		= line[3];
			var CodeDescription	= line[4];

			ElementAttributes.Dataset[DatasetName] 			= ElementAttributes.Dataset[DatasetName] || {};
			ElementAttributes.Dataset[DatasetName][ElementNumber] 	= ElementAttributes.Dataset[DatasetName][ElementNumber] || {};
			
			ElementAttributes.Dataset[DatasetName][ElementNumber].ElementName 	= ElementName;
			ElementAttributes.Dataset[DatasetName][ElementNumber].Codes 		= ElementAttributes.Dataset[DatasetName][ElementNumber].Codes || {};
			ElementAttributes.Dataset[DatasetName][ElementNumber].Codes[Code] 	= CodeDescription;
		}
	})
	.on('end', function(){
		fs.writeFileSync(filename + ".json", JSON.stringify(ElementAttributes));
	});
	

