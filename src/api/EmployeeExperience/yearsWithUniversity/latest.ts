import api from "../../api"

export const getYearsWithUniversityLatest = async () => {
    return await api.get(`/average-years-university/latest`)
}