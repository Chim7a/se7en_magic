import express from "express";
import { createEnquiryMessage } from "../controller/enquiryController.js";

const router = express.Router();

router.post("/create", createEnquiryMessage);

export default router;
