import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FrequentInquiriesCenterTrendData } from "../../../api";

export interface FrequentInquiriesCenterTrend {
  frequentInquiriesCenterTrend: FrequentInquiriesCenterTrendData[];
}

const initialState: FrequentInquiriesCenterTrend = {
  frequentInquiriesCenterTrend: [],
};

const frequentInquiriesCenterTrendSlice = createSlice({
  name: "frequentInquiriesCenterTrend",
  initialState,
  reducers: {
    setFrequentInquiriesCenterTrend(state, action: PayloadAction<FrequentInquiriesCenterTrendData[]>) {
      state.frequentInquiriesCenterTrend = action.payload;
    },
  },
});

export const { setFrequentInquiriesCenterTrend } = frequentInquiriesCenterTrendSlice.actions;
export default frequentInquiriesCenterTrendSlice.reducer;
