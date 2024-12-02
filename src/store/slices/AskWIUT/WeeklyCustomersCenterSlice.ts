import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeeklyCustomersCenterData } from "../../../api";

export interface WeeklyCustomersCenter {
  weeklyCustomersCenter: WeeklyCustomersCenterData[];
}

const initialState: WeeklyCustomersCenter = {
  weeklyCustomersCenter: [],
};

const weeklyCustomersCenterSlice = createSlice({
  name: "weeklyCustomersCenter",
  initialState,
  reducers: {
    setWeeklyCustomersCenter(state, action: PayloadAction<WeeklyCustomersCenterData[]>) {
      state.weeklyCustomersCenter = action.payload;
    },
  },
});

export const { setWeeklyCustomersCenter } = weeklyCustomersCenterSlice.actions;
export default weeklyCustomersCenterSlice.reducer;
