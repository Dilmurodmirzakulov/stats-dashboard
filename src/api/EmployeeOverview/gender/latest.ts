import api from "../../api"

export const getGendersLatest = async () => {
    return await api.get(`/gender-staff/latest`)
}