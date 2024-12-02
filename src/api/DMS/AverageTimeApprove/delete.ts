import api from "../../api"

export const deleteAverageTimeApprove = async (id: number) => {
    return await api.delete(`/average-time-approval/${id}`)
}