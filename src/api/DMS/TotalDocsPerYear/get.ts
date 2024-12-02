import api from "../../api"

export interface TotalDocsPerYearData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getTotalDocsPerYear = async (filteredMonth: string="") => {
    return await api.get(`/total-docs-year?month=${filteredMonth}`)
}