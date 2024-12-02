import api from "../../api"

export interface ActiveUsersCreation {
    name: string
    value: number
    calculated_date: string
}

export const createActiveUsers = async (data: ActiveUsersCreation) => {
    return await api.post("/active-users", data)
}