import api from "../../api"

export interface HiredCandidatesCreation {
    name: string
    value: number
    calculated_date: string
}

export const createHiredCandidates = async (data: HiredCandidatesCreation) => {
    return await api.post("/hired-candidates", data)
}
