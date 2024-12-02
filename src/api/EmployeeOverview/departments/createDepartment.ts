import api from '../../api';

export interface CreateDepartment {
    department: string
}

export const createDepartment = async (body: CreateDepartment) => {
    return await api.post(`/departments`, body);
}