import api from "../../api"

export interface TerminationRateCategoryCreation {
    name: string
    value: number
    calculated_date: string
}

export const createTerminationRateCategory = async (data: TerminationRateCategoryCreation) => {
    return await api.post("/termination-rate-category", data)
}