import api from "../../api";

export interface OffersAcceptanceUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateOffersAcceptance = async (data:OffersAcceptanceUpdate ) => {
    return await api.put(`/offers-acceptance/${data.id}`, data)
}