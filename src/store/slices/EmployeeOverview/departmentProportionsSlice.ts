import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DepartmentProportionData } from "../../../api/EmployeeOverview/departmentProportion/getDepartmentProportions";

export interface DepartmentProportions {
    departmentProportions: DepartmentProportionData[]
}

const initialState: DepartmentProportions = {
    departmentProportions: []
};

const departmentProportionsSlice = createSlice({
  name: 'department-proportions',
  initialState,
  reducers: {
    setDepartmentProportions(state, action: PayloadAction<DepartmentProportionData[]>) {
      state.departmentProportions = action.payload;
    },
  },
});

export const { setDepartmentProportions } = departmentProportionsSlice.actions;
export default departmentProportionsSlice.reducer;