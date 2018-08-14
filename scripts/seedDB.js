const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
// console.log(db);
// This file empties the taks list collection and inserts the tasks below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/listapp",
  {
    useMongoClient: true
  }
);

const taskSeed = [
  {
    name: "Do the thing",
    description: "just do it",
    deadline: new Date(2018,8,8),
    priority: 1,
    completed: false
  },
  {
    name: "Laundry",
    description: "",
    deadline: new Date(2019,9,20),
    priority: 2,
    completed: false
  }
];

db.Tasks
  .remove({})
    .then(() => db.Tasks.collection.insertMany(taskSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
