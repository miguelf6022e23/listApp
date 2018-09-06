const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const folderSchema = new Schema({
  name: {type: String, required: true },
  deletable: {type: Boolean},
  childLists: [{type: Schema.Types.ObjectId, ref: "List"}]
});

const Folders = mongoose.model("Folders", folderSchema);

module.exports = Folders;