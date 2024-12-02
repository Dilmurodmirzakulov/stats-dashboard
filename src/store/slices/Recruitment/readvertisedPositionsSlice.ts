import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReadvertisedPositionsData } from "../../../api";

export interface ReadvertisedPositions {
    readvertisedPositions: ReadvertisedPositionsData[]
}

const initialState: ReadvertisedPositions = {
    readvertisedPositions: []
};

const readvertisedPositionsSlice = createSlice({
  name: 'readvertisedPositions',
  initialState,
  reducers: {
    setReadvertisedPositions(state, action: PayloadAction<ReadvertisedPositionsData[]>) {
      state.readvertisedPositions = action.payload;
    },
  },
});

export const { setReadvertisedPositions } = readvertisedPositionsSlice.actions;
export default readvertisedPositionsSlice.reducer;