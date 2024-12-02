import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NumberOfInquiriesByTypeData } from "../../../api";

export interface NumberOfInquiriesByType {
  numberOfInquiriesByType: NumberOfInquiriesByTypeData[];
}

const initialState: NumberOfInquiriesByType = {
  numberOfInquiriesByType: [],
};

const numberOfInquiriesByTypeSlice = createSlice({
  name: "numberOfInquiriesByType",
  initialState,
  reducers: {
    setNumberOfInquiriesByType(state, action: PayloadAction<NumberOfInquiriesByTypeData[]>) {
      state.numberOfInquiriesByType = action.payload;
    },
  },
});

export const { setNumberOfInquiriesByType } = numberOfInquiriesByTypeSlice.actions;
export default numberOfInquiriesByTypeSlice.reducer;
