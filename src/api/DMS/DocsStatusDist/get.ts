import api from "../../api"

export interface DocsStatusDistData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getDocsStatusDist = async (filteredMonth: string="") => {
    return await api.get(`/docs-status-dist?month=${filteredMonth}`)
}