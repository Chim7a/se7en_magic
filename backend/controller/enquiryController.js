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

export { createEnquiryMessage };
