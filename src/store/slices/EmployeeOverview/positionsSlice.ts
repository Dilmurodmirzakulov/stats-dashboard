import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Position } from "../../../api";

export interface Positions {
    positions: Position[]
}

const initialState: Positions = {
    positions: []
};

const positionsSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {
    setPositions(state, action: PayloadAction<Position[]>) {
      state.positions = action.payload;
    },
  },
});

export const { setPositions } = positionsSlice.actions;
export default positionsSlice.reducer;