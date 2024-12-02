import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeeklyCallsCenterData } from "../../../api";

export interface WeeklyCallsCenter {
  weeklyCallsCenter: WeeklyCallsCenterData[];
}

const initialState: WeeklyCallsCenter = {
  weeklyCallsCenter: [],
};

const weeklyCallsCenterSlice = createSlice({
  name: "weeklyCallsCenter",
  initialState,
  reducers: {
    setWeeklyCallsCenter(state, action: PayloadAction<WeeklyCallsCenterData[]>) {
      state.weeklyCallsCenter = action.payload;
    },
  },
});

export const { setWeeklyCallsCenter } = weeklyCallsCenterSlice.actions;
export default weeklyCallsCenterSlice.reducer;
