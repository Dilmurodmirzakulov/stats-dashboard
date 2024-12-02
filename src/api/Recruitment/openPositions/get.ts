import api from "../../api"

export interface OpenPositionsData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getOpenPositions = async (filteredMonth: string="") => {
    return await api.get(`/open-positions?month=${filteredMonth}`)
}