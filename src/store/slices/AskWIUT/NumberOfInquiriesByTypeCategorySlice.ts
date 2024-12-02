import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NumberOfInquiriesByTypeCategoryData } from "../../../api";

export interface NumberOfInquiriesByTypeCategory {
    numberOfInquiriesByTypeCategory: NumberOfInquiriesByTypeCategoryData[]
}

const initialState: NumberOfInquiriesByTypeCategory = {
    numberOfInquiriesByTypeCategory: []
};

const numberOfInquiriesByTypeCategorySlice = createSlice({
  name: 'numberOfInquiriesByTypeCategory',
  initialState,
  reducers: {
    setNumberOfInquiriesByTypeCategory(state, action: PayloadAction<NumberOfInquiriesByTypeCategoryData[]>) {
      state.numberOfInquiriesByTypeCategory = action.payload;
    },
  },
});

export const { setNumberOfInquiriesByTypeCategory } = numberOfInquiriesByTypeCategorySlice.actions;
export default numberOfInquiriesByTypeCategorySlice.reducer;