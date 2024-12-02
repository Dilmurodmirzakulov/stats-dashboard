import api from "../../api"

export interface AverageExperienceDepartmentData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getAverageExperienceDepartment = async (filteredMonth: string="") => {
    return await api.get(`/average-experience-department?month=${filteredMonth}`)
}