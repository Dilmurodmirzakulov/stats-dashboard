import api from "../../api"

export interface TotalDocsPerMonthData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getTotalDocsPerMonth = async (filteredMonth: string="") => {
    return await api.get(`/total-docs-month?month=${filteredMonth}`)
}