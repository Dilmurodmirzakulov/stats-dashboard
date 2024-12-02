import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AgeGroupsData } from "../../../api";

export interface AgeGroups {
    ageGroups: AgeGroupsData[]
}

const initialState: AgeGroups = {
    ageGroups: []
};

const ageGroupsSlice = createSlice({
  name: 'ageGroups',
  initialState,
  reducers: {
    setAgeGroups(state, action: PayloadAction<AgeGroupsData[]>) {
      state.ageGroups = action.payload;
    },
  },
});

export const { setAgeGroups } = ageGroupsSlice.actions;
export default ageGroupsSlice.reducer;