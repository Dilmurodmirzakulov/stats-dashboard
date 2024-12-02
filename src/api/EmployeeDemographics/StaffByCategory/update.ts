import api from "../../api";

export interface StaffByCategoryUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateStaffByCategory = async (data:StaffByCategoryUpdate ) => {
    return await api.put(`/staff-category/${data.id}`, data)
}