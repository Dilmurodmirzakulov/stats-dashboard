import api from "../../api";

export interface TotalDocsPerMonthUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateTotalDocsPerMonth = async (data:TotalDocsPerMonthUpdate ) => {
    return await api.put(`/total-docs-month/${data.id}`, data)
}