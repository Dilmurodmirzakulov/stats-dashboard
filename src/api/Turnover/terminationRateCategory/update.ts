import api from "../../api";

export interface TerminationRateCategoryUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateTerminationRateCategory = async (data:TerminationRateCategoryUpdate ) => {
    return await api.put(`/termination-rate-category/${data.id}`, data)
}