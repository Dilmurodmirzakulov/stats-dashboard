import api from "../../api"

export interface ReadvertisedPositionsCreation {
    name: string
    value: number
    calculated_date: string
}

export const createReadvertisedPositions = async (data: ReadvertisedPositionsCreation) => {
    return await api.post("/re-advertised-positions", data)
}
