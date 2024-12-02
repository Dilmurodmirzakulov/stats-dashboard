import api from "../../api"

export const getEmployeeStatsLatest = async () => {
    return await api.get(`/employee-stats/latest`)
}