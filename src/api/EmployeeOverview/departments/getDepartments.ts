import api from '../../api';
export interface Department{
    id: number
    department: string
}
export const getDepartments = async () => {
    return await api.get(`/departments`);
}