import api from "../../api"

export const deleteHiredCandidates = async (id: number) => {
    return await api.delete(`/hired-candidates/${id}`)
}