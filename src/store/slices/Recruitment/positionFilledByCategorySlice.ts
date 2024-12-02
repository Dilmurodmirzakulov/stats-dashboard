import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PositionFilledByCategoryData } from "../../../api";

export interface PositionFilledByCategory {
    positionFilledByCategory: PositionFilledByCategoryData[]
}

const initialState: PositionFilledByCategory = {
    positionFilledByCategory: []
};

const positionFilledByCategorySlice = createSlice({
  name: 'positionFilledByCategory',
  initialState,
  reducers: {
    setPositionFilledByCategory(state, action: PayloadAction<PositionFilledByCategoryData[]>) {
      state.positionFilledByCategory = action.payload;
    },
  },
});

export const { setPositionFilledByCategory } = positionFilledByCategorySlice.actions;
export default positionFilledByCategorySlice.reducer;