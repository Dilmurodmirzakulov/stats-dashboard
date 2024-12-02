import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CallCenterInquiriesByCategoryTrendData } from "../../../api";

export interface CallCenterInquiriesByCategoryTrend {
  callCenterInquiriesByCategoryTrend: CallCenterInquiriesByCategoryTrendData[];
}

const initialState: CallCenterInquiriesByCategoryTrend = {
  callCenterInquiriesByCategoryTrend: [],
};

const callCenterInquiriesByCategoryTrendSlice = createSlice({
  name: "callCenterInquiriesByCategoryTrend",
  initialState,
  reducers: {
    setCallCenterInquiriesByCategoryTrend(state, action: PayloadAction<CallCenterInquiriesByCategoryTrendData[]>) {
      state.callCenterInquiriesByCategoryTrend = action.payload;
    },
  },
});

export const { setCallCenterInquiriesByCategoryTrend } = callCenterInquiriesByCategoryTrendSlice.actions;
export default callCenterInquiriesByCategoryTrendSlice.reducer;
