import api from "../../api"

export interface OpenPositionsCreation {
    name: string
    value: number
    calculated_date: string
}

export const createOpenPositions = async (data: OpenPositionsCreation) => {
    return await api.post("/open-positions", data)
}
