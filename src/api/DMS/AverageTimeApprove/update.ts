import api from "../../api";

export interface AverageTimeApproveUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateAverageTimeApprove = async (data:AverageTimeApproveUpdate ) => {
    return await api.put(`/average-time-approval/${data.id}`, data)
}