import api from "../../api"

export interface AverageTimeApproveCreation {
    name: string
    value: number
    calculated_date: string
}

export const createAverageTimeApprove = async (data: AverageTimeApproveCreation) => {
    return await api.post("/average-time-approval", data)
}