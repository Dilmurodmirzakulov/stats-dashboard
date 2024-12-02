import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YearlyCallsCenterData } from "../../../api";

export interface YearlyCallsCenter {
  yearlyCallsCenter: YearlyCallsCenterData[];
}

const initialState: YearlyCallsCenter = {
  yearlyCallsCenter: [],
};

const yearlyCallsCenterSlice = createSlice({
  name: "yearlyCallsCenter",
  initialState,
  reducers: {
    setYearlyCallsCenter(state, action: PayloadAction<YearlyCallsCenterData[]>) {
      state.yearlyCallsCenter = action.payload;
    },
  },
});

export const { setYearlyCallsCenter } = yearlyCallsCenterSlice.actions;
export default yearlyCallsCenterSlice.reducer;
