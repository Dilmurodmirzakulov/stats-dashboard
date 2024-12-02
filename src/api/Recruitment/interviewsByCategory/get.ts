import api from "../../api"

export interface InterviewsByCategoryData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getInterviewsByCategory = async (filteredMonth: string="") => {
    return await api.get(`/interviews-by-category?month=${filteredMonth}`)
}