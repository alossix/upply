import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  userIdFromAuth0: {
    type: mongoose.Schema.Types.ObjectId,
  },
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
        // const urlRegExp = new RegExp(urlPattern);
        return value == null || urlPattern.test(value);
      },
      message: `Please provide a valid URL.`,
    },
  },
  logoUrl: {
    type: String,
    validate: {
      validator: function (value) {
        const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
        // const urlRegExp = new RegExp(urlPattern);
        return value == null || urlPattern.test(value);
      },
      message: `Please provide a valid URL.`,
    },
  },
  added: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Company ||
  mongoose.model("Company", CompanySchema);
