import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TotalDocsPerYearData } from "../../../api";

export interface TotalDocsPerYear {
    totalDocsPerYear: TotalDocsPerYearData[]
}

const initialState: TotalDocsPerYear = {
    totalDocsPerYear: []
};

const totalDocsPerYearSlice = createSlice({
  name: 'totalDocsPerYear',
  initialState,
  reducers: {
    setTotalDocsPerYear(state, action: PayloadAction<TotalDocsPerYearData[]>) {
      state.totalDocsPerYear = action.payload;
    },
  },
});

export const { setTotalDocsPerYear } = totalDocsPerYearSlice.actions;
export default totalDocsPerYearSlice.reducer;