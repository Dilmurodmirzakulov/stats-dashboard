import api from "../../api"

export interface PositionFilledByCategoryData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getPositionFilledByCategory = async (filteredMonth: string="") => {
    return await api.get(`/position-filled-by-category?month=${filteredMonth}`)
}