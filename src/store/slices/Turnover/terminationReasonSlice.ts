import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TerminationReasonData } from "../../../api";

export interface TerminationReason {
    terminationReason: TerminationReasonData[]
}

const initialState: TerminationReason = {
    terminationReason: []
};

const terminationReasonSlice = createSlice({
  name: 'terminationReason',
  initialState,
  reducers: {
    setTerminationReason(state, action: PayloadAction<TerminationReasonData[]>) {
      state.terminationReason = action.payload;
    },
  },
});

export const { setTerminationReason } = terminationReasonSlice.actions;
export default terminationReasonSlice.reducer;