var fs 			= require('fs');
var split 		= require('split');

var skip = 1;
var ElementAttributes 	= {
	Dataset: {}
};


fs.createReadStream("Combined_ElementDetails_Full.txt")
	.pipe(split())
	.on('data', function(data){
		if( 1 !== skip++ ) {			
			data = data.replace(/\'/g, "");
			var line = data.split('|')
				   line.pop();
			
			var name = line[0];
			var numb = line[2];
			
			ElementAttributes.Dataset[name] 	= ElementAttributes.Dataset[name] || {};
			ElementAttributes.Dataset[name][numb] 	= {
				DatasetType: 	line[1],
				ElementName:	line[3],
				V2Number:	line[4],
				National: 	line[5],
				State:		line[6],
				Definition:	line[7],
				Usage:		line[8],
				V3Changes:	line[9],
				MinOccurs:	line[10],
				MaxOccurs:	line[11],
				IsNillable:	line[12],
				DataType:	line[13],
				NV:		line[14],
				PN:		line[15],
				PNNill:		line[16],
				NVList:		line[17],
				PNList:		line[18],
				minLength:	line[19],
				maxLength:	line[20],
				length:		line[21],
				minInclusive:	line[22],
				maxInclusive:	line[23],
				minExclusive:	line[24],
				totalDigits:	line[25],
				fractionDigits:	line[26],
				pattern:	line[27]
			}
		}
	})
	.on('end', function(){
		fs.writeFileSync('Combined_ElementDetails_Full.json', JSON.stringify(ElementAttributes));
	});
	

