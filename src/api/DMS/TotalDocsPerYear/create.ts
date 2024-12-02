import api from "../../api"

export interface TotalDocsPerYearCreation {
    name: string
    value: number
    calculated_date: string
}

export const createTotalDocsPerYear = async (data: TotalDocsPerYearCreation) => {
    return await api.post("/total-docs-year", data)
}