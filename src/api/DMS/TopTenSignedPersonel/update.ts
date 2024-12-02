import api from "../../api";

export interface TopTenSignedPersonelUpdate {
    id: number
    name: string
    value: number     
    time: number
    calculated_date: string
}

export const updateTopTenSignedPersonel = async (data:TopTenSignedPersonelUpdate ) => {
    return await api.put(`/top-ten-signed/${data.id}`, data)
}