import api from "../../api"

export interface AverageExperienceCategoryCreation {
    name: string
    value: number
    calculated_date: string
}

export const createAverageExperienceCategory = async (data: AverageExperienceCategoryCreation) => {
    return await api.post("/average-experience-category", data)
}