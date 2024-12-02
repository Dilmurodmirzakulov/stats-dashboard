import api from "../../api"

export const getOffersAcceptanceLatest = async () => {
    return await api.get(`/offers-acceptance/latest`)
}