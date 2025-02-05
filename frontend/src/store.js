import { configureStore } from "@reduxjs/toolkit";
import enquiryReducer from "./features/enquiry/enquirySlice";

export const store = configureStore({
  reducer: {
    enquiry: enquiryReducer,
  },
});
