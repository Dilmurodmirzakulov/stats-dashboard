import api from '../../api';
import { DepartmentProportion } from './createDepartmentProportion';

export const updateDepartmentProportion = async (body: DepartmentProportion) => {
    return await api.put(`/proportion-department/${body.id}`, body);
}