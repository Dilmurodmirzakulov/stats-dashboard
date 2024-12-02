import api from "../../api";

export interface InterviewsByCategoryUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateInterviewsByCategory = async (data:InterviewsByCategoryUpdate ) => {
    return await api.put(`/interviews-by-category/${data.id}`, data)
}