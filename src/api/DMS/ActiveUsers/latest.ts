import api from "../../api"

export const getActiveUserLatest = async () => {
    return await api.get(`/active-users/latest`)
}