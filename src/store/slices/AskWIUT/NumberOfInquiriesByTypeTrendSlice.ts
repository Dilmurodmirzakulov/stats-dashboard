import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NumberOfInquiriesByTypeTrendData } from "../../../api";

export interface NumberOfInquiriesByTypeTrend {
  numberOfInquiriesByTypeTrend: NumberOfInquiriesByTypeTrendData[];
}

const initialState: NumberOfInquiriesByTypeTrend = {
  numberOfInquiriesByTypeTrend: [],
};

const numberOfInquiriesByTypeTrendSlice = createSlice({
  name: "numberOfInquiriesByTypeTrend",
  initialState,
  reducers: {
    setNumberOfInquiriesByTypeTrend(state, action: PayloadAction<NumberOfInquiriesByTypeTrendData[]>) {
      state.numberOfInquiriesByTypeTrend = action.payload;
    },
  },
});

export const { setNumberOfInquiriesByTypeTrend } = numberOfInquiriesByTypeTrendSlice.actions;
export default numberOfInquiriesByTypeTrendSlice.reducer;
