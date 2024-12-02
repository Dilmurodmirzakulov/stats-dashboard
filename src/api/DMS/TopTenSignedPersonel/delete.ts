import api from "../../api"

export const deleteTopTenSignedPersonel = async (id: number) => {
    return await api.delete(`/top-ten-signed/${id}`)
}