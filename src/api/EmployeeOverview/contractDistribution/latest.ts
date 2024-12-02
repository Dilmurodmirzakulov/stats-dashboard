import api from "../../api"

export const getContractDistsLatest = async () => {
    return await api.get(`/contract-distribution/latest`)
}