import api from "../../api"

export const getShiftDistsLatest = async () => {
    return await api.get(`/shift-distribution/latest`)
}