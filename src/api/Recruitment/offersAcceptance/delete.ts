import api from "../../api"

export const deleteOffersAcceptance = async (id: number) => {
    return await api.delete(`/offers-acceptance/${id}`)
}