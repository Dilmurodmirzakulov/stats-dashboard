import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TerminationMonthsData } from "../../../api";

export interface TerminationMonths {
    terminationMonths: TerminationMonthsData[]
}

const initialState: TerminationMonths = {
    terminationMonths: []
};

const terminationMonthsSlice = createSlice({
  name: 'terminationMonths',
  initialState,
  reducers: {
    setTerminationMonths(state, action: PayloadAction<TerminationMonthsData[]>) {
      state.terminationMonths = action.payload;
    },
  },
});

export const { setTerminationMonths } = terminationMonthsSlice.actions;
export default terminationMonthsSlice.reducer;