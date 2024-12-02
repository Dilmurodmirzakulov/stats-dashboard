import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaffNationalityData } from "../../../api";

export interface StaffNationality {
    staffNationality: StaffNationalityData[]
}

const initialState: StaffNationality = {
    staffNationality: []
};

const staffNationalitySlice = createSlice({
  name: 'staffNationality',
  initialState,
  reducers: {
    setStaffNationality(state, action: PayloadAction<StaffNationalityData[]>) {
      state.staffNationality = action.payload;
    },
  },
});

export const { setStaffNationality } = staffNationalitySlice.actions;
export default staffNationalitySlice.reducer;