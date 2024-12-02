import api from "../../api"

export const deleteTerminationYears = async (id: number) => {
    return await api.delete(`/termination-years/${id}`)
}