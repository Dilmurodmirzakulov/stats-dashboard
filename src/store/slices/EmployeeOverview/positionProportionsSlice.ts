import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PositionProportionData } from "../../../api/EmployeeOverview/positionProportion/getPositionProportions";

export interface PositionProportions {
    positionProportions: PositionProportionData[]
}

const initialState: PositionProportions = {
    positionProportions: []
};

const positionProportionsSlice = createSlice({
  name: 'position-proportions',
  initialState,
  reducers: {
    setPositionProportions(state, action: PayloadAction<PositionProportionData[]>) {
      state.positionProportions = action.payload;
    },
  },
});

export const { setPositionProportions } = positionProportionsSlice.actions;
export default positionProportionsSlice.reducer;