import api from "../../api"

export const deleteTerminationReason = async (id: number) => {
    return await api.delete(`/termination-reason/${id}`)
}