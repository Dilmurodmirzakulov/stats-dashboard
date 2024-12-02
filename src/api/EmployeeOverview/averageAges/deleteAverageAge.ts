import api from '../../api';

export const deleteAverageAge = async (id: number) => {
    return await api.delete(`/average-ages/${id}`);
}