var settings	= require('../settings.js')();

var MongoClient = require('mongodb').MongoClient;
var assert 		= require('assert');
var ObjectId 	= require('mongodb').ObjectID;
var url			= 'mongodb://' + settings.host;

module.exports = {
	/**
	 * query mongodb for information
	 * @param  {Object} Object takes {Company: ****, Collection: ****, Data: **** }	
	 * @return {Object}        Object containing the data of query
	 */
	getUserById: function (Object) {
		var privateUrl = url + Object.Company;
		var collection = 'users';

		MongoClient.connect(url, function (err, db) {
			if(err) {
				console.error(err);
			} else {
				assert.equal(null, err);
				var cursor = db.collection(collection).find();
				cursor.each( function (err, doc) {
					assert.equal(null, err);
					if (doc !== null) {
						console.log(doc);
					} else {
						db.close();
					}
				});
			}
		});
	},

	/**
	 * insert data into mongo
	 * @param  {Object} Object takes {Company: ****, Collection: ****, Data: **** }
	 * @return {boolean}        true or false, if successfull
	 */
	insert: function (Object) {
		Object.Company;
		Object.Collection;
		Object.Data;
	}
}