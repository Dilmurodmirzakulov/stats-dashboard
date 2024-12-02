import api from "../../api"

export const deleteEmployeeStats = async (id: number) => {
    return await api.delete(`/employee-stats/${id}`)
}