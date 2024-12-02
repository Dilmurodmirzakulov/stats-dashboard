import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TotalDocsPerMonthData } from "../../../api";

export interface TotalDocsPerMonth {
    totalDocsPerMonth: TotalDocsPerMonthData[]
}

const initialState: TotalDocsPerMonth = {
    totalDocsPerMonth: []
};

const totalDocsPerMonthSlice = createSlice({
  name: 'totalDocsPerMonth',
  initialState,
  reducers: {
    setTotalDocsPerMonth(state, action: PayloadAction<TotalDocsPerMonthData[]>) {
      state.totalDocsPerMonth = action.payload;
    },
  },
});

export const { setTotalDocsPerMonth } = totalDocsPerMonthSlice.actions;
export default totalDocsPerMonthSlice.reducer;