import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  bookmarked: {
    type: Boolean,
    default: false,
  },
  jobTitle: {
    type: String,
    required: [true, "Job title is required."],
  },
  companyName: {
    type: String,
    required: [true, "Company name is required."],
  },
  companyUrl: { type: String },
  jobLocation: { type: String },
  jobListingUrl: { type: String },
  salary: { type: String },
  notes: [String],
  status: { type: String },
  userIdFromAuth0: { type: String },
  added: {
    type: Date,
    default: Date.now,
  },
});

// const Job = () => {
//   if (mongoose.model.Job) {
//     return mongoose.model.Job;
//   } else {
//     return mongoose.model("job", jobSchema);
//   }
// };

// module.exports = Job;
const Job = mongoose.models.jobs || mongoose.model("jobs", jobSchema);
export default Job;
