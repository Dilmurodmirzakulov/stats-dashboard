import api from '../../api';

export const deletePosition = async (id: number) => {
    return await api.delete(`/positins/${id}`);
}