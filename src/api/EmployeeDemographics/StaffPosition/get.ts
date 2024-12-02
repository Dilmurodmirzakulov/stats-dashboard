import api from "../../api"

export interface StaffPositionData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getStaffPosition = async (filteredMonth: string="") => {
    return await api.get(`/staff-position?month=${filteredMonth}`)
}