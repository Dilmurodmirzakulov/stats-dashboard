import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimeHireByCategoryData } from "../../../api";

export interface TimeHireByCategory {
    timeHireByCategory: TimeHireByCategoryData[]
}

const initialState: TimeHireByCategory = {
    timeHireByCategory: []
};

const timeHireByCategorySlice = createSlice({
  name: 'timeHireByCategory',
  initialState,
  reducers: {
    setTimeHireByCategory(state, action: PayloadAction<TimeHireByCategoryData[]>) {
      state.timeHireByCategory = action.payload;
    },
  },
});

export const { setTimeHireByCategory } = timeHireByCategorySlice.actions;
export default timeHireByCategorySlice.reducer;