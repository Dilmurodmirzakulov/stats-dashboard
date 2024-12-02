import api from "../../api"

export const deleteOffers = async (id: number) => {
    return await api.delete(`/offers/${id}`)
}