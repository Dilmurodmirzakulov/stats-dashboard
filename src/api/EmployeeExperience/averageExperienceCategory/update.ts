import api from "../../api";

export interface AverageExperienceCategoryUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateAverageExperienceCategory = async (data:AverageExperienceCategoryUpdate ) => {
    return await api.put(`/average-experience-category/${data.id}`, data)
}