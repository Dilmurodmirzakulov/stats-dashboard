import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaffByCategoryData } from "../../../api";

export interface StaffByCategory {
    staffByCategory: StaffByCategoryData[]
}

const initialState: StaffByCategory = {
    staffByCategory: []
};

const staffByCategorySlice = createSlice({
  name: 'staffByCategory',
  initialState,
  reducers: {
    setStaffByCategory(state, action: PayloadAction<StaffByCategoryData[]>) {
      state.staffByCategory = action.payload;
    },
  },
});

export const { setStaffByCategory } = staffByCategorySlice.actions;
export default staffByCategorySlice.reducer;