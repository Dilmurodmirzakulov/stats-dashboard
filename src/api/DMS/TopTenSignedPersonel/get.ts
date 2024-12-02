import api from "../../api"

export interface TopTenSignedPersonelData {
    id: number
    name: string
    value: number
    time: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getTopTenSignedPersonel = async (filteredMonth: string="") => {
    return await api.get(`/top-ten-signed?month=${filteredMonth}`)
}