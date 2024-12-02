import api from "../../api";

export interface TimeHireByCategoryUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateTimeHireByCategory = async (data:TimeHireByCategoryUpdate ) => {
    return await api.put(`/time-hired-by-category/${data.id}`, data)
}