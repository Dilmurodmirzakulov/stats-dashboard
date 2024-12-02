import api from "../../api"

export interface AverageExperienceDepartmentCreation {
    name: string
    value: number
    calculated_date: string
}

export const createAverageExperienceDepartment = async (data: AverageExperienceDepartmentCreation) => {
    return await api.post("/average-experience-department", data)
}