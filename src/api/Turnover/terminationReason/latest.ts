import api from "../../api"

export const getTerminationReasonLatest = async () => {
    return await api.get(`/termination-reason/latest`)
}