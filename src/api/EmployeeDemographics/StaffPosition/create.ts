import api from "../../api"

export interface StaffPositionCreation {
    name: string
    value: number
    calculated_date: string
}

export const createStaffPosition = async (data: StaffPositionCreation) => {
    return await api.post("/staff-position", data)
}