import api from "../../api"

export interface TimeHireByCategoryCreation {
    name: string
    value: number
    calculated_date: string
}

export const createTimeHireByCategory = async (data: TimeHireByCategoryCreation) => {
    return await api.post("/time-hired-by-category", data)
}
