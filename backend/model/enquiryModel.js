import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: 2,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: 2,
    },
    enquiryMessage: {
      type: String,
      trim: true,
      required: true,
      minLength: 2,
    },
  },
  { timestamps: true }
);

const EnquiryModel = new mongoose.model("enquiries", enquirySchema);

export { EnquiryModel };
