import api from "../../api"

export const getReadvertisedPositionsLatest = async () => {
    return await api.get(`/re-advertised-positions/latest`)
}