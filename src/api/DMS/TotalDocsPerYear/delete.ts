import api from "../../api"

export const deleteTotalDocsPerYear = async (id: number) => {
    return await api.delete(`/total-docs-year/${id}`)
}