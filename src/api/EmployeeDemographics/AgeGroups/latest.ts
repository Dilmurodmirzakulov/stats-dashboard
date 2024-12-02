import api from "../../api"

export const getAgeGroupLatest = async () => {
    return await api.get(`/age-groups/latest`)
}