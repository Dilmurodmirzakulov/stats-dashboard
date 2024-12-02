import api from "../../api"

export interface DocsPendingApprovalCreation {
    name: string
    value: number
    calculated_date: string
}

export const createDocsPendingApproval = async (data: DocsPendingApprovalCreation) => {
    return await api.post("/docs-pending-approval", data)
}