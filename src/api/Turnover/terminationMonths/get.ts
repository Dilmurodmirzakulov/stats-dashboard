import api from "../../api"

export interface TerminationMonthsData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getTerminationMonths = async (filteredMonth: string="") => {
    return await api.get(`/termination-months?month=${filteredMonth}`)
}