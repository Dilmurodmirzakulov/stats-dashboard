import api from "../../api"

export const deleteDocsPendingApproval = async (id: number) => {
    return await api.delete(`/docs-pending-approval/${id}`)
}