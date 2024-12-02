import api from "../../api"

export interface OffersData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getOffers = async (filteredMonth: string="") => {
    return await api.get(`/offers?month=${filteredMonth}`)
}