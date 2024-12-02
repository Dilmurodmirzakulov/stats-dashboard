import api from "../../api";

export interface ActiveUserUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateActiveUser = async (data:ActiveUserUpdate ) => {
    return await api.put(`/active-users/${data.id}`, data)
}