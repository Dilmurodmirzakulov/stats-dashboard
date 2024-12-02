import api from "../../api"

export const getAverageAgesLatest = async () => {
    return await api.get(`/average-ages/latest`)
}