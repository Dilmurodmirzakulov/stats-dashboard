import api from "../../api"

export interface OffersAcceptanceCreation {
    name: string
    value: number
    calculated_date: string
}

export const createOffersAcceptance = async (data: OffersAcceptanceCreation) => {
    return await api.post("/offers-acceptance", data)
}
