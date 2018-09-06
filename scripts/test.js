const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
// console.log(db);
// This file empties the taks list collection and inserts the tasks below

var connection = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/listapp",
  {
    useMongoClient: true
  }
);

var testFolder = new db.Folders({
	name: "testFolder",
	deletable: false
});

/*testFolder.save(function (err) {
	console.log('no?');
	var testUser = new db.Users({
		username: "test",
	    email: "test@test.com",
	    password: "testtest",
	    rootFolder: testFolder._id
	});

	testUser.save(function (err) {
		console.log('yes?');
		});
}).then(() => {
	process.exit(0);
});*/

	db.Folders.create(testFolder)
	.then(function(dbFolder) {
		db.Users.findOneAndUpdate({ email: 'miguelfwebdev@gmail.com'},{rootFolder: dbFolder._id}, function(err,obj){
			console.log(obj)
			}) 
	}).then(() => {
		db.Users.findOne({ email: 'miguelfwebdev@gmail.com'}, function(err,obj){
			console.log(obj?(obj):('none'));
		}).then(() => process.exit(0));
	});

/*db.Users.findOne({ email: 'miguelfwebdev@gmail.com'}, function(err,obj){
	console.log(obj);
}).then(() => process.exit(0));*/