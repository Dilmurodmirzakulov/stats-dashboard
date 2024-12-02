import api from "../../api"

export const getAverageExperienceCategoryLatest = async () => {
    return await api.get(`/average-experience-category/latest`)
}