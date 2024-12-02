import api from "../../api"

export interface AverageExperienceCategoryData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getAverageExperienceCategory = async (filteredMonth: string="") => {
    return await api.get(`/average-experience-category?month=${filteredMonth}`)
}