import api from "../../api"

export const getTotalDocsPerYearLatest = async () => {
    return await api.get(`/total-docs-year/latest`)
}