import api from "../../api"

export const getStaffCategoryGenderLatest = async () => {
    return await api.get(`/staff-category-gender/latest`)
}