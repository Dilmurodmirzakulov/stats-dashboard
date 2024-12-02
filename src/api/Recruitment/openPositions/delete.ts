import api from "../../api"

export const deleteOpenPositions = async (id: number) => {
    return await api.delete(`/open-positions/${id}`)
}