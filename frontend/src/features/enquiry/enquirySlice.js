import { createSlice } from "@reduxjs/toolkit";

export const enquirySlice = createSlice({
  name: "enquiry",
  initialState: {
    makeEnquiry: null,
  },
  reducers: {
    addEnquiry: (state, action) => {
      state.makeEnquiry = action.payload;
    },
  },
});

export const { addEnquiry } = enquirySlice.actions;

export default enquirySlice.reducer;
