import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HourlyCallsCenterData } from "../../../api";

export interface HourlyCallsCenter {
  hourlyCallsCenter: HourlyCallsCenterData[];
}

const initialState: HourlyCallsCenter = {
  hourlyCallsCenter: [],
};

const hourlyCallsCenterSlice = createSlice({
  name: "hourlyCallsCenter",
  initialState,
  reducers: {
    setHourlyCallsCenter(state, action: PayloadAction<HourlyCallsCenterData[]>) {
      state.hourlyCallsCenter = action.payload;
    },
  },
});

export const { setHourlyCallsCenter } = hourlyCallsCenterSlice.actions;
export default hourlyCallsCenterSlice.reducer;
