import api from "../../api"

export interface HiredCandidatesData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getHiredCandidates = async (filteredMonth: string="") => {
    return await api.get(`/hired-candidates?month=${filteredMonth}`)
}