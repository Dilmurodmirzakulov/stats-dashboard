import api from "../../api";

export interface EmployeeStatsUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateEmployeeStats = async (data:EmployeeStatsUpdate ) => {
    return await api.put(`/employee-stats/${data.id}`, data)
}