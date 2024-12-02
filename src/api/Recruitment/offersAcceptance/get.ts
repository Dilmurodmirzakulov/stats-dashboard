import api from "../../api"

export interface OffersAcceptanceData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getOffersAcceptance = async (filteredMonth: string="") => {
    return await api.get(`/offers-acceptance?month=${filteredMonth}`)
}