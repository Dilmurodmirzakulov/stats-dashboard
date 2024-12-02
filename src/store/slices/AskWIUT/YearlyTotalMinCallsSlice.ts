import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YearlyTotalMinCallsData } from "../../../api";

export interface YearlyTotalMinCalls {
  yearlyTotalMinCalls: YearlyTotalMinCallsData[];
}

const initialState: YearlyTotalMinCalls = {
  yearlyTotalMinCalls: [],
};

const yearlyTotalMinCallsSlice = createSlice({
  name: "yearlyTotalMinCalls",
  initialState,
  reducers: {
    setYearlyTotalMinCalls(
      state,
      action: PayloadAction<YearlyTotalMinCallsData[]>
    ) {
      state.yearlyTotalMinCalls = action.payload;
    },
  },
});

export const { setYearlyTotalMinCalls } = yearlyTotalMinCallsSlice.actions;
export default yearlyTotalMinCallsSlice.reducer;
