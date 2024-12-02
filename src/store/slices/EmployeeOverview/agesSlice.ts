import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Age } from "../../../api";

export interface Ages {
    ages: Age[]
}

const initialState: Ages = {
    ages: []
};

const agesSlice = createSlice({
  name: 'ages',
  initialState,
  reducers: {
    setAges(state, action: PayloadAction<Age[]>) {
      state.ages = action.payload;
    },
  },
});

export const { setAges } = agesSlice.actions;
export default agesSlice.reducer;