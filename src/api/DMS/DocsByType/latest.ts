import api from "../../api"

export const getDocsByTypeLatest = async () => {
    return await api.get(`/docs-by-type/latest`)
}