import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AverageTimeCallData } from "../../../api";

export interface AverageTimeCall {
  averageTimeCall: AverageTimeCallData[];
}

const initialState: AverageTimeCall = {
  averageTimeCall: [],
};

const averageTimeCallSlice = createSlice({
  name: "averageTimeCall",
  initialState,
  reducers: {
    setAverageTimeCall(state, action: PayloadAction<AverageTimeCallData[]>) {
      state.averageTimeCall = action.payload;
    },
  },
});

export const { setAverageTimeCall } = averageTimeCallSlice.actions;
export default averageTimeCallSlice.reducer;
