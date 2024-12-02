import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HiredCandidatesData } from "../../../api";

export interface HiredCandidates {
    hiredCandidates: HiredCandidatesData[]
}

const initialState: HiredCandidates = {
    hiredCandidates: []
};

const hiredCandidatesSlice = createSlice({
  name: 'hiredCandidates',
  initialState,
  reducers: {
    setHiredCandidates(state, action: PayloadAction<HiredCandidatesData[]>) {
      state.hiredCandidates = action.payload;
    },
  },
});

export const { setHiredCandidates } = hiredCandidatesSlice.actions;
export default hiredCandidatesSlice.reducer;