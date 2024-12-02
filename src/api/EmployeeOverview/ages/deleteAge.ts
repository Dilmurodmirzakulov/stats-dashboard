import api from '../../api';

export const deleteAge = async (id: number) => {
    return await api.delete(`/ages/${id}`);
}