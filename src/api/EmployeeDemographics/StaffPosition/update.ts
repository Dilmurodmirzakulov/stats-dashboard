import api from "../../api";

export interface StaffPositionUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateStaffPosition = async (data:StaffPositionUpdate ) => {
    return await api.put(`/staff-position/${data.id}`, data)
}