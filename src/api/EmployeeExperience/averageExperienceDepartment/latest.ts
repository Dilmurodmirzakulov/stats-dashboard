import api from "../../api"

export const getAverageExperienceDepartmentLatest = async () => {
    return await api.get(`/average-experience-department/latest`)
}