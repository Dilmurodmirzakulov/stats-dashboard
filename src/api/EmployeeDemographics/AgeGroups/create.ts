import api from "../../api"

export interface AgeGroupsCreation {
    name: string
    value: number
    calculated_date: string
}

export const createAgeGroups = async (data: AgeGroupsCreation) => {
    return await api.post("/age-groups", data)
}