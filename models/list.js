const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  name: {type: String, required: true },
  childTasks: [{type: Schema.Types.ObjectId, ref: "Task"}]
});

const Lists = mongoose.model("Lists", listSchema);

module.exports = Lists;