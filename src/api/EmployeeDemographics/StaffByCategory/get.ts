import api from "../../api"

export interface StaffByCategoryData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getStaffByCategory = async (filteredMonth: string="") => {
    return await api.get(`/staff-category?month=${filteredMonth}`)
}