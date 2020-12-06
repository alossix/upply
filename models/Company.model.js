const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    index: true,
    required: [true, "Company name is required"],
  },
  companyLocation: {
    type: String,
    required: [true, "Company location is required"],
  },
  companyUrl: {
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
  logoUrl: {
    type: String,
    validate: {
      validator: function (value) {
        const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
        const urlRegExp = new RegExp(urlPattern);
        return value.match(urlRegExp);
      },
      message: `Please provide a valid URL.`,
    },
    default: "/office.png",
  },
  added: {
    type: Date,
    default: Date.now,
  },
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
