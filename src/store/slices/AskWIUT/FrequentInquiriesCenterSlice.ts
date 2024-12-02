import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FrequentInquiriesCenterData } from "../../../api";

export interface FrequentInquiriesCenter {
  frequentInquiriesCenter: FrequentInquiriesCenterData[];
}

const initialState: FrequentInquiriesCenter = {
  frequentInquiriesCenter: [],
};

const frequentInquiriesCenterSlice = createSlice({
  name: "frequentInquiriesCenter",
  initialState,
  reducers: {
    setFrequentInquiriesCenter(state, action: PayloadAction<FrequentInquiriesCenterData[]>) {
      state.frequentInquiriesCenter = action.payload;
    },
  },
});

export const { setFrequentInquiriesCenter } = frequentInquiriesCenterSlice.actions;
export default frequentInquiriesCenterSlice.reducer;
