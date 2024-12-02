import api from "../../api"

export const getAverageTimeApproveLatest = async () => {
    return await api.get(`/average-time-approval/latest`)
}