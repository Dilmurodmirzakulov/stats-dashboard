import api from "../../api"

export const getTopTenSignedPersonelLatest = async () => {
    return await api.get(`/top-ten-signed/latest`)
}