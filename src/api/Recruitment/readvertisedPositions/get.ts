import api from "../../api"

export interface ReadvertisedPositionsData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getReadvertisedPositions = async (filteredMonth: string="") => {
    return await api.get(`/re-advertised-positions?month=${filteredMonth}`)
}