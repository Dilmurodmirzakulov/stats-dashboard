import api from "../../api";

export interface DocsByTypeUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateDocsByType = async (data:DocsByTypeUpdate ) => {
    return await api.put(`/docs-by-type/${data.id}`, data)
}