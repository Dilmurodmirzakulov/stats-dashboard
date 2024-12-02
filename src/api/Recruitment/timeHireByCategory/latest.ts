import api from "../../api"

export const getTimeHireByCategoryLatest = async () => {
    return await api.get(`/time-hired-by-category/latest`)
}