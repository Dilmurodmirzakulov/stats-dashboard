import api from "../../api"

export const getStaffNationalityLatest = async () => {
    return await api.get(`/staff-nationality/latest`)
}