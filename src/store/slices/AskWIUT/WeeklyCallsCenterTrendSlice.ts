import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeeklyCallsCenterTrendData } from "../../../api";

export interface WeeklyCallsCenterTrend {
  weeklyCallsCenterTrend: WeeklyCallsCenterTrendData[];
}

const initialState: WeeklyCallsCenterTrend = {
  weeklyCallsCenterTrend: [],
};

const weeklyCallsCenterTrendSlice = createSlice({
  name: "weeklyCallsCenterTrend",
  initialState,
  reducers: {
    setWeeklyCallsCenterTrend(state, action: PayloadAction<WeeklyCallsCenterTrendData[]>) {
      state.weeklyCallsCenterTrend = action.payload;
    },
  },
});

export const { setWeeklyCallsCenterTrend } = weeklyCallsCenterTrendSlice.actions;
export default weeklyCallsCenterTrendSlice.reducer;
