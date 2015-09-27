var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var base = 'mongodb://localhost:27017/test';

MongoClient.connect(base, function(err, db) {
  assert.equal(null, err);
  //console.log("Connected correctly to server.");
  db.close();
});
