import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CallCenterInquiriesByCategoryData } from "../../../api";

export interface CallCenterInquiriesByCategory {
  callCenterInquiriesByCategory: CallCenterInquiriesByCategoryData[];
}

const initialState: CallCenterInquiriesByCategory = {
  callCenterInquiriesByCategory: [],
};

const callCenterInquiriesByCategorySlice = createSlice({
  name: "callCenterInquiriesByCategory",
  initialState,
  reducers: {
    setCallCenterInquiriesByCategory(state, action: PayloadAction<CallCenterInquiriesByCategoryData[]>) {
      state.callCenterInquiriesByCategory = action.payload;
    },
  },
});

export const { setCallCenterInquiriesByCategory } = callCenterInquiriesByCategorySlice.actions;
export default callCenterInquiriesByCategorySlice.reducer;
