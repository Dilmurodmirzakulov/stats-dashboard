import api from "../../api"

export const deleteTotalDocsPerMonth = async (id: number) => {
    return await api.delete(`/total-docs-month/${id}`)
}