const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  trackedCompanies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }],
  trackedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  hashedPassword: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
