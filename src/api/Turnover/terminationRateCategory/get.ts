import api from "../../api"

export interface TerminationRateCategoryData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getTerminationRateCategory = async (filteredMonth: string="") => {
    return await api.get(`/termination-rate-category?month=${filteredMonth}`)
}