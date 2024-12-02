import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HourlyCallsCenterTrendData } from "../../../api";

export interface HourlyCallsCenterTrend {
  hourlyCallsCenterTrend: HourlyCallsCenterTrendData[];
}

const initialState: HourlyCallsCenterTrend = {
  hourlyCallsCenterTrend: [],
};

const hourlyCallsCenterTrendSlice = createSlice({
  name: "hourlyCallsCenterTrend",
  initialState,
  reducers: {
    setHourlyCallsCenterTrend(state, action: PayloadAction<HourlyCallsCenterTrendData[]>) {
      state.hourlyCallsCenterTrend = action.payload;
    },
  },
});

export const { setHourlyCallsCenterTrend } = hourlyCallsCenterTrendSlice.actions;
export default hourlyCallsCenterTrendSlice.reducer;
