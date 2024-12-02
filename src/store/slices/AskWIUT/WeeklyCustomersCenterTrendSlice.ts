import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeeklyCustomersCenterTrendData } from "../../../api";

export interface WeeklyCustomersCenterTrend {
  weeklyCustomersCenterTrend: WeeklyCustomersCenterTrendData[];
}

const initialState: WeeklyCustomersCenterTrend = {
  weeklyCustomersCenterTrend: [],
};

const weeklyCustomersCenterTrendSlice = createSlice({
  name: "weeklyCustomersCenterTrend",
  initialState,
  reducers: {
    setWeeklyCustomersCenterTrend(state, action: PayloadAction<WeeklyCustomersCenterTrendData[]>) {
      state.weeklyCustomersCenterTrend = action.payload;
    },
  },
});

export const { setWeeklyCustomersCenterTrend } = weeklyCustomersCenterTrendSlice.actions;
export default weeklyCustomersCenterTrendSlice.reducer;
