import api from "../../api"

export interface TotalDocsPerMonthCreation {
    name: string
    value: number
    calculated_date: string
}

export const createTotalDocsPerMonth = async (data: TotalDocsPerMonthCreation) => {
    return await api.post("/total-docs-month", data)
}