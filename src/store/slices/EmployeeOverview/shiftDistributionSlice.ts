import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShiftDistData } from "../../../api";

export interface ShiftDists {
    shiftDists: ShiftDistData[]
}

const initialState: ShiftDists = {
    shiftDists: []
};

const shiftDistsSlice = createSlice({
  name: 'shiftDists',
  initialState,
  reducers: {
    setShiftDists(state, action: PayloadAction<ShiftDistData[]>) {
      state.shiftDists = action.payload;
    },
  },
});

export const { setShiftDists } = shiftDistsSlice.actions;
export default shiftDistsSlice.reducer;