import api from "../../api"

export const getHiredCandidatesLatest = async () => {
    return await api.get(`/hired-candidates/latest`)
}