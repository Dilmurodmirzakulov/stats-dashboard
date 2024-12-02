import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaffPositionData } from "../../../api";

export interface StaffPosition {
    staffPosition: StaffPositionData[]
}

const initialState: StaffPosition = {
    staffPosition: []
};

const staffPositionSlice = createSlice({
  name: 'staffPosition',
  initialState,
  reducers: {
    setStaffPosition(state, action: PayloadAction<StaffPositionData[]>) {
      state.staffPosition = action.payload;
    },
  },
});

export const { setStaffPosition } = staffPositionSlice.actions;
export default staffPositionSlice.reducer;