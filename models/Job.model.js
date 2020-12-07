const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: [
      true,
      "Please select an existing company or first add a new one",
    ],
  },
  jobTitle: {
    type: String,
    index: true,
    required: [true, "Job title is required"],
  },
  applied: {
    type: Boolean,
  },
  favorite: {
    type: Boolean,
  },
  response: [
    {
      type: String,
    },
  ],
  followUp: [
    {
      type: String,
    },
  ],
  platform: {
    type: String,
  },
  jobListingUrl: {
    type: String,
    validate: {
      validator: function (value) {
        const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
        const urlRegExp = new RegExp(urlPattern);
        return value.match(urlRegExp);
      },
      message: `Please provide a valid URL.`,
    },
  },
  location: String,
  salary: String,
  jobDescription: {
    type: String,
  },
  prosList: [{ type: String }],
  consList: [{ type: String }],
  added: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
