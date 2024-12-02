import api from "../../api"

export const deleteYearsWithUniversity = async (id: number) => {
    return await api.delete(`/average-years-university/${id}`)
}