import api from "../../api"

export const deletePositionFilledByCategory = async (id: number) => {
    return await api.delete(`/position-filled-by-category/${id}`)
}