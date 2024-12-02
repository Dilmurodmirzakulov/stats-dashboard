import api from "../../api"

export const getTotalDocsPerMonthLatest = async () => {
    return await api.get(`/total-docs-month/latest`)
}