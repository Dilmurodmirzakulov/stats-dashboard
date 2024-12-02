import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AverageExperienceDepartmentData } from "../../../api";

export interface AverageExperienceDepartment {
    averageExperienceDepartment: AverageExperienceDepartmentData[]
}

const initialState: AverageExperienceDepartment = {
    averageExperienceDepartment: []
};

const averageExperienceDepartmentSlice = createSlice({
  name: 'averageExperienceDepartment',
  initialState,
  reducers: {
    setAverageExperienceDepartment(state, action: PayloadAction<AverageExperienceDepartmentData[]>) {
      state.averageExperienceDepartment = action.payload;
    },
  },
});

export const { setAverageExperienceDepartment } = averageExperienceDepartmentSlice.actions;
export default averageExperienceDepartmentSlice.reducer;