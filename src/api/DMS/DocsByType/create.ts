import api from "../../api"

export interface DocsByTypeCreation {
    name: string
    value: number
    calculated_date: string
}

export const createDocsByType = async (data: DocsByTypeCreation) => {
    return await api.post("/docs-by-type", data)
}