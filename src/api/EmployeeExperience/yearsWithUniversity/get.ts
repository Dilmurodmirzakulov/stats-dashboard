import api from "../../api"

export interface YearsWithUniversityData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getYearsWithUniversity = async (filteredMonth: string="") => {
    return await api.get(`/average-years-university?month=${filteredMonth}`)
}