import api from "../../api";

export interface OffersUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateOffers = async (data:OffersUpdate ) => {
    return await api.put(`/offers/${data.id}`, data)
}