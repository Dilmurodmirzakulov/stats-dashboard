import api from "../../api";

export interface TerminationYearsUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateTerminationYears = async (data:TerminationYearsUpdate ) => {
    return await api.put(`/termination-years/${data.id}`, data)
}