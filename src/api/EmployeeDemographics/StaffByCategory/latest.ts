import api from "../../api"

export const getStaffByCategoryLatest = async () => {
    return await api.get(`/staff-category/latest`)
}