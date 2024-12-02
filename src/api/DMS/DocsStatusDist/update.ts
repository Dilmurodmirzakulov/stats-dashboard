import api from "../../api";

export interface DocsStatusDistUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateDocsStatusDist = async (data:DocsStatusDistUpdate ) => {
    return await api.put(`/docs-status-dist/${data.id}`, data)
}