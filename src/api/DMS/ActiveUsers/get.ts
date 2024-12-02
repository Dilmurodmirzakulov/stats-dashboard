import api from "../../api"

export interface ActiveUserData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getActiveUsers = async (filteredMonth: string="") => {
    return await api.get(`/active-users?month=${filteredMonth}`)
}