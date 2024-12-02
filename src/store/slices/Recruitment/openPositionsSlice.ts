import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenPositionsData } from "../../../api";

export interface OpenPositions {
    openPositions: OpenPositionsData[]
}

const initialState: OpenPositions = {
    openPositions: []
};

const openPositionsSlice = createSlice({
  name: 'openPositions',
  initialState,
  reducers: {
    setOpenPositions(state, action: PayloadAction<OpenPositionsData[]>) {
      state.openPositions = action.payload;
    },
  },
});

export const { setOpenPositions } = openPositionsSlice.actions;
export default openPositionsSlice.reducer;