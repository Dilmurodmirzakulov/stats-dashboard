import api from "../../api"

export const getTerminationYearsLatest = async () => {
    return await api.get(`/termination-years/latest`)
}