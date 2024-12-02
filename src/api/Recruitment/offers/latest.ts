import api from "../../api"

export const getOffersLatest = async () => {
    return await api.get(`/offers/latest`)
}