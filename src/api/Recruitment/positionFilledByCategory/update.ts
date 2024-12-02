import api from "../../api";

export interface PositionFilledByCategoryUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updatePositionFilledByCategory = async (data:PositionFilledByCategoryUpdate ) => {
    return await api.put(`/position-filled-by-category/${data.id}`, data)
}