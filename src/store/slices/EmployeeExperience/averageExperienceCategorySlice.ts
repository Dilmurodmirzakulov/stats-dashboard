import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AverageExperienceCategoryData } from "../../../api";

export interface AverageExperienceCategory {
    averageExperienceCategory: AverageExperienceCategoryData[]
}

const initialState: AverageExperienceCategory = {
    averageExperienceCategory: []
};

const averageExperienceCategorySlice = createSlice({
  name: 'averageExperienceCategory',
  initialState,
  reducers: {
    setAverageExperienceCategory(state, action: PayloadAction<AverageExperienceCategoryData[]>) {
      state.averageExperienceCategory = action.payload;
    },
  },
});

export const { setAverageExperienceCategory } = averageExperienceCategorySlice.actions;
export default averageExperienceCategorySlice.reducer;