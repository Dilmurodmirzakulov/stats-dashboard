import api from "../../api"

export const getTerminationMonthsLatest = async () => {
    return await api.get(`/termination-months/latest`)
}