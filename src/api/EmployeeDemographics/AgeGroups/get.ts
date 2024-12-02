import api from "../../api"

export interface AgeGroupsData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getAgeGroups = async (filteredMonth: string="") => {
    return await api.get(`/age-groups?month=${filteredMonth}`)
}