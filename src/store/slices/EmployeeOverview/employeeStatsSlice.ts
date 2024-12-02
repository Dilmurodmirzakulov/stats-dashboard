import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EmployeeStats } from "../../../api";

export interface EmployeeStatsList {
    employeeStats: EmployeeStats[]
}

const initialState: EmployeeStatsList = {
    employeeStats: []
}

const employeeStatsSlice = createSlice({
    name: "employee-stats",
    initialState,
    reducers: {
        setEmployeeStats(state, action: PayloadAction<EmployeeStats[]>){
            state.employeeStats = action.payload;
        }
    }
})

export const {setEmployeeStats} = employeeStatsSlice.actions
export default employeeStatsSlice.reducer