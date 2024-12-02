import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Department } from "../../../api";

export interface Departments {
    departments: Department[]
}

const initialState: Departments = {
    departments: []
};

const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    setDepartments(state, action: PayloadAction<Department[]>) {
      state.departments = action.payload;
    },
  },
});

export const { setDepartments } = departmentsSlice.actions;
export default departmentsSlice.reducer;