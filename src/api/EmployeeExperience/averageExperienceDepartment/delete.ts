import api from "../../api"

export const deleteAverageExperienceDepartment = async (id: number) => {
    return await api.delete(`/average-experience-department/${id}`)
}