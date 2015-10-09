"use strict";

const fs 	 = require('fs');
const split  = require('split');
const extend = require('extend');

let files = [
	'Combined_ElementAttributes',
	'Combined_ElementDetails_Full',
	'Combined_ElementEnumerations'
].map((file) => 'datafiles/' + file + '.txt')

let finished = 0;
let counter  = 0;
let nemsis 	 = {};

fs.createReadStream(files[0])
	.pipe(split())
	.on('data', function(line) {
		line = removeFirstAndLast(line).split("'|'");

		// build data structure JSON

		var dataset 	  = line[0];
		var datasettype   = line[1];
		var elementnumber = line[2];
		var elementname   = line[3];
		var attribute 	  = line[4];

		nemsis[dataset] = nemsis[dataset] || {};
		nemsis[dataset][elementnumber] = nemsis[dataset][elementnumber] || {};
		nemsis[dataset][elementnumber].DatasetType = datasettype;
		nemsis[dataset][elementnumber].ElementName = elementname;
		nemsis[dataset][elementnumber].Attribute = nemsis[dataset][elementnumber].Attribute || [];
		nemsis[dataset][elementnumber].Attribute.push(attribute);

	})
	.on('end', function () {
		finishedFunc();
	});

fs.createReadStream(files[1])
	.pipe(split())
	.on('data', function(line) {
		line = removeFirstAndLast(line).split("'|'");

		// build data structure JSON

		var dataset 	  = line[0];
		var datasettype   = line[1];
		var elementnumber = line[2];
		var elementname   = line[3];
		var v2number 	  = line[4];


		nemsis[dataset] = nemsis[dataset] || {};
		nemsis[dataset][elementnumber] = nemsis[dataset][elementnumber] || {};
		nemsis[dataset][elementnumber].DatasetType  = datasettype;
		nemsis[dataset][elementnumber].ElementName  = elementname;
		nemsis[dataset][elementnumber].V2Number 	= v2number;
		nemsis[dataset][elementnumber].National 	= line[5];
		nemsis[dataset][elementnumber].State 		= line[6];
		nemsis[dataset][elementnumber].Definition 	= line[7];
		nemsis[dataset][elementnumber].Usage 		= line[8];
		nemsis[dataset][elementnumber].V3Changes 	= line[9];
		nemsis[dataset][elementnumber].MinOccurs 	= line[10];
		nemsis[dataset][elementnumber].MaxOccurs 	= line[11];
		nemsis[dataset][elementnumber].IsNillable 	= line[12];
		nemsis[dataset][elementnumber].DataType 	= line[13];
		nemsis[dataset][elementnumber].NV 			= line[14];
		nemsis[dataset][elementnumber].PN 			= line[15];
		nemsis[dataset][elementnumber].PNNill 		= line[16];
		nemsis[dataset][elementnumber].NVList 		= line[17];
		nemsis[dataset][elementnumber].PNList 		= line[18];
		nemsis[dataset][elementnumber].minLength 	= line[19];
		nemsis[dataset][elementnumber].length 		= line[20];
		nemsis[dataset][elementnumber].minInclusive = line[21];
		nemsis[dataset][elementnumber].maxInclusive = line[22];
		nemsis[dataset][elementnumber].minExclusive = line[23];
		nemsis[dataset][elementnumber].totalDigits  = line[24];
		nemsis[dataset][elementnumber].fractionDigits = line[25];
		nemsis[dataset][elementnumber].pattern 		= line[26];


	})
	.on('end', function () {
		finishedFunc()
	});

fs.createReadStream(files[2])
	.pipe(split())
	.on('data', function(line) {
		line = removeFirstAndLast(line).split("'|'");

		// build data structure JSON

		var dataset 	  = line[0];
		var elementnumber = line[1];
		var elementname   = line[2];


		nemsis[dataset] = nemsis[dataset] || {};
		nemsis[dataset][elementnumber] = nemsis[dataset][elementnumber] || {};
		nemsis[dataset][elementnumber].ElementName = elementname;
		nemsis[dataset][elementnumber].Codes = nemsis[dataset][elementnumber].Codes || {};
		nemsis[dataset][elementnumber].Codes[line[3]] = line[4];
	})
	.on('end', function() {
		finishedFunc();
	});


function removeFirstAndLast (str) {
	str = str.slice(1);
	str = str.slice(0, str.length-2);
	return str;
}

function finishedFunc () {
	finished+= 1;
	console.log('finished ' + finished);
	finished === 3 ? fs.createWriteStream('output.json').end(JSON.stringify(nemsis)) : console.log('');
}