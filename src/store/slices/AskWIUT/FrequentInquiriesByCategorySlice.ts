import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FrequentInquiriesByCategoryData } from "../../../api";

export interface FrequentInquiriesByCategory {
  frequentInquiriesByCategory: FrequentInquiriesByCategoryData[];
}

const initialState: FrequentInquiriesByCategory = {
  frequentInquiriesByCategory: [],
};

const frequentInquiriesByCategorySlice = createSlice({
  name: "frequentInquiriesByCategory",
  initialState,
  reducers: {
    setFrequentInquiriesByCategory(state, action: PayloadAction<FrequentInquiriesByCategoryData[]>) {
      state.frequentInquiriesByCategory = action.payload;
    },
  },
});

export const { setFrequentInquiriesByCategory } = frequentInquiriesByCategorySlice.actions;
export default frequentInquiriesByCategorySlice.reducer;
