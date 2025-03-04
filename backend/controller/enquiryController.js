import { EnquiryModel } from "../model/enquiryModel.js";
import validator from "validator";

const createEnquiryMessage = async (req, res) => {
  const { name, email, enquiryMessage } = req.body;
  console.log(req.body);

  if (validator.isEmpty(name, { ignore_whitespace: true }) === true) {
    return res
      .status(400)
      .json({ message: "Please provide your name", status: "Failed" });
  }

  if (validator.isEmail(email) === false) {
    return res
      .status(400)
      .json({ message: "Please provide your email", status: "Failed" });
  }

  if (validator.isEmpty(enquiryMessage, { ignore_whitespace: true }) === true) {
    return res
      .status(400)
      .json({ message: "Please provide a message", status: "Failed" });
  }

  try {
    const enquiry = await EnquiryModel.create({
      name: name,
      email: email,
      enquiryMessage: enquiryMessage,
    });

    res.status(200).send({ data: enquiry, status: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "failed" });
  }
};

const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await EnquiryModel.find();

    res.status(200).json({ message: "successful", data: enquiries });
  } catch (error) {
    res.status(400).json({ message: "failed", data: error });
  }
};

const getSingleEnquiry = async (req, res) => {
  const { enquiryId } = req.params;

  if (!enquiryId) {
    return res
      .status(400)
      .json({ message: "Please provide a valid ID.", data: null });
  }

  try {
    const singleEnquiry = await EnquiryModel.findOne({ _id: enquiryId });

    res.status(200).json({ message: "successful", data: singleEnquiry });
  } catch (error) {
    res.status(400).json({ message: "failed", data: error });
  }
};

export { createEnquiryMessage, getAllEnquiries, getSingleEnquiry };
