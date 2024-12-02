import api from "../../api"

export const getDocsStatusDistLatest = async () => {
    return await api.get(`/docs-status-dist/latest`)
}