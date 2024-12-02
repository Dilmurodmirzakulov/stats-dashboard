import api from "../../api"

export const deleteStaffNationality = async (id: number) => {
    return await api.delete(`/staff-nationality/${id}`)
}