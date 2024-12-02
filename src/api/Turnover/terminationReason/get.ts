import api from "../../api"

export interface TerminationReasonData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getTerminationReason = async (filteredMonth: string="") => {
    return await api.get(`/termination-reason?month=${filteredMonth}`)
}