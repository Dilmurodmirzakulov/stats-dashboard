import api from "../../api"

export const deleteTerminationRateCategory = async (id: number) => {
    return await api.delete(`/termination-rate-category/${id}`)
}