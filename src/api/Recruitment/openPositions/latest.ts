import api from "../../api"

export const getOpenPositionsLatest = async () => {
    return await api.get(`/open-positions/latest`)
}