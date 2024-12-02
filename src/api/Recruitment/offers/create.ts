import api from "../../api"

export interface OffersCreation {
    name: string
    value: number
    calculated_date: string
}

export const createOffers = async (data: OffersCreation) => {
    return await api.post("/offers", data)
}
