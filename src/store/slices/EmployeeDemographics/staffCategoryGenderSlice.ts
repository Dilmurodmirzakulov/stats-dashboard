import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaffCategoryGenderData } from "../../../api";

export interface StaffCategoryGender {
    staffCategoryGender: StaffCategoryGenderData[]
}

const initialState: StaffCategoryGender = {
    staffCategoryGender: []
};

const staffCategoryGenderSlice = createSlice({
  name: 'staffCategoryGender',
  initialState,
  reducers: {
    setStaffCategoryGender(state, action: PayloadAction<StaffCategoryGenderData[]>) {
      state.staffCategoryGender = action.payload;
    },
  },
});

export const { setStaffCategoryGender } = staffCategoryGenderSlice.actions;
export default staffCategoryGenderSlice.reducer;