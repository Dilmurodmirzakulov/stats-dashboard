import api from "../../api";

export interface TerminationReasonUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateTerminationReason = async (data:TerminationReasonUpdate ) => {
    return await api.put(`/termination-reason/${data.id}`, data)
}