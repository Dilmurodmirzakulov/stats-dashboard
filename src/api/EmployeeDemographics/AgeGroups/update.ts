import api from "../../api";

export interface AgeGroupUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateAgeGroup = async (data:AgeGroupUpdate ) => {
    return await api.put(`/age-groups/${data.id}`, data)
}