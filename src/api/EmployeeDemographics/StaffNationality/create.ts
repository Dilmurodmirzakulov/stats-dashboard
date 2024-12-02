import api from "../../api"

export interface StaffNationalityCreation {
    name: string
    value: number
    calculated_date: string
}

export const createStaffNationality = async (data: StaffNationalityCreation) => {
    return await api.post("/staff-nationality", data)
}