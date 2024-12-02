import api from "../../api"

export interface DocsByTypeData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getDocsByType = async (filteredMonth: string="") => {
    return await api.get(`/docs-by-type?month=${filteredMonth}`)
}