import api from "../../api";

export interface HiredCandidatesUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateHiredCandidates = async (data:HiredCandidatesUpdate ) => {
    return await api.put(`/hired-candidates/${data.id}`, data)
}