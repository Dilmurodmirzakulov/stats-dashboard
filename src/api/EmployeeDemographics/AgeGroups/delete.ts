import api from "../../api"

export const deleteAgeGroup = async (id: number) => {
    return await api.delete(`/age-groups/${id}`)
}