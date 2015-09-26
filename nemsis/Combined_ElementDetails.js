var fs 			= require('fs');
var split 		= require('split');

var skip = 1;
var ElementAttributes 	= {
	Dataset: {}
};

var filename = "Combined_ElementDetails";

fs.createReadStream(filename + ".txt")
	.pipe(split())
	.on('data', function(data){
		if(skip++ !== 1){
			data = data.replace(/\'/g, "");	
		
			var line = data.split('|')
		    	    line.pop();
	
			var name = line[0];
			var numb = line[2];

			ElementAttributes.Dataset[name] = ElementAttributes.Dataset[name] || {};
			ElementAttributes.Dataset[name][numb] = {
				DatasetType:		line[1],
				ElementName:		line[3],
				V2Number:		line[4],
				National:		line[5],
				State:			line[6],
				Usage:			line[7],
				MinOccurs:		line[8],
				MaxOccurs:		line[9],
				IsNillable:		line[10],
				DataType:		line[11],
				NV:			line[12],
				PN:			line[13],
				PNNill:			line[14],
				NVList:			line[15],
				PNList:			line[16],
				minLength:		line[17],
				maxLength:		line[18],
				length:			line[19],
				minInclusive:		line[20],
				maxInclusive:		line[21],
				minExclusive:		line[22],
				totalDigits:		line[23],
				fractionDigits:		line[24],
				pattern:		line[25]
			};
		}
	})
	.on('end', function(){
		fs.writeFileSync(filename + ".json", JSON.stringify(ElementAttributes));
	});
	

