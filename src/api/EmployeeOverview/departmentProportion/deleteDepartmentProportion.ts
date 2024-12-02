import api from '../../api';

export const deleteDepartmentProportion = async (id: number) => {
    return await api.delete(`/proportion-department/${id}`);
}