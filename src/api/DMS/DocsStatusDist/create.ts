import api from "../../api"

export interface DocsStatusDistCreation {
    name: string
    value: number
    calculated_date: string
}

export const createDocsStatusDist = async (data: DocsStatusDistCreation) => {
    return await api.post("/docs-status-dist", data)
}