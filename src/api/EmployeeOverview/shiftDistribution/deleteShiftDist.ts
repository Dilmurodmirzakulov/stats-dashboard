import api from '../../api';

export const deleteShiftDist = async (id: number) => {
    return await api.delete(`/shift-distribution/${id}`);
}