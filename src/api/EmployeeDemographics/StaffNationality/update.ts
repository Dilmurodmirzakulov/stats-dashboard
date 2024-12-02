import api from "../../api";

export interface StaffNationalityUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateStaffNationality = async (data:StaffNationalityUpdate ) => {
    return await api.put(`/staff-nationality/${data.id}`, data)
}