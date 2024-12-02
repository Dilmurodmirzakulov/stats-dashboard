import api from "../../api";

export interface AverageExperienceDepartmentUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateAverageExperienceDepartment = async (data:AverageExperienceDepartmentUpdate ) => {
    return await api.put(`/average-experience-department/${data.id}`, data)
}