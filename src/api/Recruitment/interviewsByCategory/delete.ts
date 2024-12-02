import api from "../../api"

export const deleteInterviewsByCategory = async (id: number) => {
    return await api.delete(`/interviews-by-category/${id}`)
}