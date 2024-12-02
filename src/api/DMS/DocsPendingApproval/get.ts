import api from "../../api"

export interface DocsPendingApprovalData {
    id: number
    name: string
    value: number
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getDocsPendingApproval = async (filteredMonth: string="") => {
    return await api.get(`/docs-pending-approval?month=${filteredMonth}`)
}