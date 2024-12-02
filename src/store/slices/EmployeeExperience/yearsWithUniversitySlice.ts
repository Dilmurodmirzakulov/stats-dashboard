import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YearsWithUniversityData } from "../../../api";

export interface YearsWithUniversity {
    yearsWithUniversity: YearsWithUniversityData[]
}

const initialState: YearsWithUniversity = {
    yearsWithUniversity: []
};

const yearsWithUniversitySlice = createSlice({
  name: 'yearsWithUniversity',
  initialState,
  reducers: {
    setYearsWithUniversity(state, action: PayloadAction<YearsWithUniversityData[]>) {
      state.yearsWithUniversity = action.payload;
    },
  },
});

export const { setYearsWithUniversity } = yearsWithUniversitySlice.actions;
export default yearsWithUniversitySlice.reducer;