import api from "../../api"

export const deleteDocsStatusDist = async (id: number) => {
    return await api.delete(`/docs-status-dist/${id}`)
}