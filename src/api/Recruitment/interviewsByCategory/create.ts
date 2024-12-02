import api from "../../api"

export interface InterviewsByCategoryCreation {
    name: string
    value: number
    calculated_date: string
}

export const createInterviewsByCategory = async (data: InterviewsByCategoryCreation) => {
    return await api.post("/interviews-by-category", data)
}
