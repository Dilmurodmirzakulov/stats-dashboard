import api from "../../api"

export const deleteTerminationMonths = async (id: number) => {
    return await api.delete(`/termination-months/${id}`)
}