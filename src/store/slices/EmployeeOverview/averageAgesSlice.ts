import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AverageAgeData } from "../../../api";

export interface AverageAges {
    averageAges: AverageAgeData[]
}

const initialState: AverageAges = {
    averageAges: []
};

const averageAgesSlice = createSlice({
  name: 'avarage-ages',
  initialState,
  reducers: {
    setAverageAges(state, action: PayloadAction<AverageAgeData[]>) {
      state.averageAges = action.payload;
    },
  },
});

export const { setAverageAges } = averageAgesSlice.actions;
export default averageAgesSlice.reducer;