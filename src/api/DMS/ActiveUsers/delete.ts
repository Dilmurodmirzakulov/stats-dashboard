import api from "../../api"

export const deleteActiveUser = async (id: number) => {
    return await api.delete(`/active-users/${id}`)
}