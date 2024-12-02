import api from '../../api';
import { Department } from './getDepartments';

export const updateDepartment = async (body: Department) => {
    return await api.put(`/departments/${body.id}`, body);
}