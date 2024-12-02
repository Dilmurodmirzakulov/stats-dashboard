import api from "../../api"

export const getStaffPositionLatest = async () => {
    return await api.get(`/staff-position/latest`)
}