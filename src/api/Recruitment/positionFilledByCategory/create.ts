import api from "../../api"

export interface PositionFilledByCategoryCreation {
    name: string
    value: number
    calculated_date: string
}

export const createPositionFilledByCategory = async (data: PositionFilledByCategoryCreation) => {
    return await api.post("/position-filled-by-category", data)
}
