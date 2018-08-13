const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  /*title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date }*/
  name: { type: String, required: true },
  description: {type: String},
  deadline: {type: Date},
  priority: {type: Number},
  completed: {type: Boolean}
});

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;