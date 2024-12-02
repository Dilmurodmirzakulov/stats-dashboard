import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TerminationRateCategoryData } from "../../../api";

export interface TerminationRateCategory {
    terminationRateCategory: TerminationRateCategoryData[]
}

const initialState: TerminationRateCategory = {
    terminationRateCategory: []
};

const terminationRateCategorySlice = createSlice({
  name: 'terminationRateCategory',
  initialState,
  reducers: {
    setTerminationRateCategory(state, action: PayloadAction<TerminationRateCategoryData[]>) {
      state.terminationRateCategory = action.payload;
    },
  },
});

export const { setTerminationRateCategory } = terminationRateCategorySlice.actions;
export default terminationRateCategorySlice.reducer;