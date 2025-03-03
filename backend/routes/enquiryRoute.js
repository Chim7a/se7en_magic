import express from "express";
import {
  createEnquiryMessage,
  getAllEnquiries,
} from "../controller/enquiryController.js";

const router = express.Router();

router.post("/create", createEnquiryMessage);
router.get("/all-enquiries", getAllEnquiries);

export default router;
