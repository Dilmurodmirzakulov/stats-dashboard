import api from "../../api"

export const deleteAverageExperienceCategory = async (id: number) => {
    return await api.delete(`/average-experience-category/${id}`)
}