import api from "../../api"

export interface EmployeeStats {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getEmployeeStats = async () => {
    return await api.get("/employee-stats")
}