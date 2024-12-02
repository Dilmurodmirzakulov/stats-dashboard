import api from "../../api"

export const deleteStaffByCategory = async (id: number) => {
    return await api.delete(`/staff-category/${id}`)
}