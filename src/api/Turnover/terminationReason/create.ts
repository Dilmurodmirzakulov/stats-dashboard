import api from "../../api"

export interface TerminationReasonCreation {
    name: string
    value: number
    calculated_date: string
}

export const createTerminationReason = async (data: TerminationReasonCreation) => {
    return await api.post("/termination-reason", data)
}