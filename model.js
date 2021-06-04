const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  create_by: {
    type: String
  },
  create_date: {
    type: Number
  },
  last_update_by: {
    type: String
  },
  last_update_date: {
    type: Number
  },
});

module.exports = User = mongoose.model("users", UserSchema);