import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrendYearsNamesData } from "../../../api";

export interface TrendYearsNames {
  trendYearsNames: TrendYearsNamesData[];
}

const initialState: TrendYearsNames = {
  trendYearsNames: [],
};

const TrendYearsNamesSlice = createSlice({
  name: "TrendYearsNames",
  initialState,
  reducers: {
    setTrendYearsNames(state, action: PayloadAction<TrendYearsNamesData[]>) {
      state.trendYearsNames = action.payload;
    },
  },
});

export const { setTrendYearsNames } = TrendYearsNamesSlice.actions;
export default TrendYearsNamesSlice.reducer;
