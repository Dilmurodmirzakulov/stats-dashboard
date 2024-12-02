import api from "../../api";

export interface TerminationMonthsUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateTerminationMonths = async (data:TerminationMonthsUpdate ) => {
    return await api.put(`/termination-months/${data.id}`, data)
}