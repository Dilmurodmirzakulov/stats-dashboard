import api from "../../api"

export const deleteStaffCategoryGender = async (id: number) => {
    return await api.delete(`/staff-category-gender/${id}`)
}