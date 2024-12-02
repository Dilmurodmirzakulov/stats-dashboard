import api from "../../api"

export const deleteStaffPosition = async (id: number) => {
    return await api.delete(`/staff-position/${id}`)
}