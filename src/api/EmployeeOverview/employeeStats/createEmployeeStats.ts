import api from "../../api"

export interface EmployeeStatsCreation {
    name: string
    value: number
    calculated_date: string
}

export const createEmployeeStats = async (data: EmployeeStatsCreation) => {
    return await api.post("/employee-stats", data)
}