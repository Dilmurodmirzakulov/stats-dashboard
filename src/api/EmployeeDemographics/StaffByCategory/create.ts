import api from "../../api"

export interface StaffByCategoryCreation {
    name: string
    value: number
    calculated_date: string
}

export const createStaffByCategory = async (data: StaffByCategoryCreation) => {
    return await api.post("/staff-category", data)
}