import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TerminationYearsData } from "../../../api";

export interface TerminationYears {
    terminationYears: TerminationYearsData[]
}

const initialState: TerminationYears = {
    terminationYears: []
};

const terminationYearsSlice = createSlice({
  name: 'terminationYears',
  initialState,
  reducers: {
    setTerminationYears(state, action: PayloadAction<TerminationYearsData[]>) {
      state.terminationYears = action.payload;
    },
  },
});

export const { setTerminationYears } = terminationYearsSlice.actions;
export default terminationYearsSlice.reducer;