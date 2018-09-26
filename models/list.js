const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  name: {type: String, required: true },
  parentFolder: {type: Schema.Types.ObjectId, ref: "Folder"}
});

const Lists = mongoose.model("Lists", listSchema);

module.exports = Lists;