import api from "../../api"

export interface TopTenSignedPersonelCreation {
    name: string
    value: number
    time: number
    calculated_date: string
}

export const createTopTenSignedPersonel = async (data: TopTenSignedPersonelCreation) => {
    return await api.post("/top-ten-signed", data)
}