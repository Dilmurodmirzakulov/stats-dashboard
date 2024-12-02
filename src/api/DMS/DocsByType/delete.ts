import api from "../../api"

export const deleteDocsByType = async (id: number) => {
    return await api.delete(`/docs-by-type/${id}`)
}