import api from "../../api"

export const deleteTimeHireByCategory = async (id: number) => {
    return await api.delete(`/time-hired-by-category/${id}`)
}