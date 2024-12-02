import api from "../../api"

export const getPositionFilledByCategoryLatest = async () => {
    return await api.get(`/position-filled-by-category/latest`)
}