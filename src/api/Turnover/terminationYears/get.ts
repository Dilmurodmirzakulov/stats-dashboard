import api from "../../api"

export interface TerminationYearsData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getTerminationYears = async (filteredMonth: string="") => {
    return await api.get(`/termination-years?month=${filteredMonth}`)
}