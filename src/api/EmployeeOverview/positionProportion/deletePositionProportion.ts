import api from '../../api';

export const deletePositionProportion = async (id: number) => {
    return await api.delete(`/position-proportion/${id}`);
}