import api from "../../api"

export interface StaffNationalityData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getStaffNationality = async (filteredMonth: string="") => {
    return await api.get(`/staff-nationality?month=${filteredMonth}`)
}