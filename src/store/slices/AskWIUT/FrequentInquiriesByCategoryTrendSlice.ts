import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FrequentInquiriesByCategoryTrendData } from "../../../api";

export interface FrequentInquiriesByCategoryTrend {
  frequentInquiriesByCategoryTrend: FrequentInquiriesByCategoryTrendData[];
}

const initialState: FrequentInquiriesByCategoryTrend = {
  frequentInquiriesByCategoryTrend: [],
};

const frequentInquiriesByCategoryTrendSlice = createSlice({
  name: "frequentInquiriesByCategoryTrend",
  initialState,
  reducers: {
    setFrequentInquiriesByCategoryTrend(state, action: PayloadAction<FrequentInquiriesByCategoryTrendData[]>) {
      state.frequentInquiriesByCategoryTrend = action.payload;
    },
  },
});

export const { setFrequentInquiriesByCategoryTrend } = frequentInquiriesByCategoryTrendSlice.actions;
export default frequentInquiriesByCategoryTrendSlice.reducer;
