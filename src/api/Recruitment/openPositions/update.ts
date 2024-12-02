import api from "../../api";

export interface OpenPositionsUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateOpenPositions = async (data:OpenPositionsUpdate ) => {
    return await api.put(`/open-positions/${data.id}`, data)
}