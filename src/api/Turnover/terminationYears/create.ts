import api from "../../api"

export interface TerminationYearsCreation {
    name: string
    value: number
    calculated_date: string
}

export const createTerminationYears = async (data: TerminationYearsCreation) => {
    return await api.post("/termination-years", data)
}