import api from "../../api"

export const deleteReadvertisedPositions = async (id: number) => {
    return await api.delete(`/re-advertised-positions/${id}`)
}