import api from "../../api";

export interface ReadvertisedPositionsUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateReadvertisedPositions = async (data:ReadvertisedPositionsUpdate ) => {
    return await api.put(`/re-advertised-positions/${data.id}`, data)
}