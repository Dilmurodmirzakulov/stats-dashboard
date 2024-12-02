import api from "../../api";

export interface TotalDocsPerYearUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateTotalDocsPerYear = async (data:TotalDocsPerYearUpdate ) => {
    return await api.put(`/total-docs-year/${data.id}`, data)
}