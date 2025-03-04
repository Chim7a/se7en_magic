import express from "express";
import {
  createEnquiryMessage,
  getAllEnquiries,
  getSingleEnquiry,
} from "../controller/enquiryController.js";

const router = express.Router();

router.post("/create", createEnquiryMessage);
router.get("/all-enquiries", getAllEnquiries);
router.get("/admin/:enquiryId", getSingleEnquiry);

export default router;
