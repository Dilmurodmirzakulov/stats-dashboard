import api from "../../api"

export const getPositionProportionsLatest = async () => {
    return await api.get(`/position-proportion/latest`)
}