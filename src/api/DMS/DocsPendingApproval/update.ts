import api from "../../api";

export interface DocsPendingApprovalUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateDocsPendingApproval = async (data:DocsPendingApprovalUpdate ) => {
    return await api.put(`/docs-pending-approval/${data.id}`, data)
}