import api from "../../api"

export const getDocsPendingApprovalLatest = async () => {
    return await api.get(`/docs-pending-approval/latest`)
}