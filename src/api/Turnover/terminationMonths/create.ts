import api from "../../api"

export interface TerminationMonthsCreation {
    name: string
    value: number
    calculated_date: string
}

export const createTerminationMonths = async (data: TerminationMonthsCreation) => {
    return await api.post("/termination-months", data)
}