import api from "../../api"

export const getInterviewsByCategoryLatest = async () => {
    return await api.get(`/interviews-by-category/latest`)
}