import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActiveUserData } from "../../../api";

export interface AverageTimeApprove {
    averageTimeApprove: ActiveUserData[]
}

const initialState: AverageTimeApprove = {
    averageTimeApprove: []
};

const averageTimeApproveSlice = createSlice({
  name: 'averageTimeApprove',
  initialState,
  reducers: {
    setAverageTimeApprove(state, action: PayloadAction<ActiveUserData[]>) {
      state.averageTimeApprove = action.payload;
    },
  },
});

export const { setAverageTimeApprove } = averageTimeApproveSlice.actions;
export default averageTimeApproveSlice.reducer;