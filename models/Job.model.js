const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: [true, "Job title is required."],
  },
  companyName: {
    type: String,
    required: [true, "Company name is required."],
  },
  companyUrl: String,
  jobLocation: String,
  jobListingUrl: String,
  salary: { type: String },
  notes: [String],
  status: String,
  userIdFromAuth0: { type: String },
  added: {
    type: Date,
    default: Date.now,
  },
});

const Job = (module.exports = mongoose.model("job", jobSchema));
