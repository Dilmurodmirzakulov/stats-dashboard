import api from "../../api"

export const getTerminationRateCategoryLatest = async () => {
    return await api.get(`/termination-rate-category/latest`)
}