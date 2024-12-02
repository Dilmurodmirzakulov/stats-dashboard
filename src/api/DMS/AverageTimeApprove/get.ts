import api from "../../api"

export interface AverageTimeApproveData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getAverageTimeApprove = async (filteredMonth: string="") => {
    return await api.get(`/average-time-approval?month=${filteredMonth}`)
}