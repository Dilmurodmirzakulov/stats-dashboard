import api from "../../api"

export interface TimeHireByCategoryData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getTimeHireByCategory = async (filteredMonth: string="") => {
    return await api.get(`/time-hired-by-category?month=${filteredMonth}`)
}