import api from '../../api';

export const deleteDepartment = async (id: number) => {
    return await api.delete(`/departments/${id}`);
}