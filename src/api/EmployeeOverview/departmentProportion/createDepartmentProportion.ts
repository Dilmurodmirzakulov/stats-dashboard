import api from '../../api';

export interface DepartmentProportion {
    id?: number 
    proportion_id: number;
    value: number;
    calculated_date: string;
}

export const createDepartmentProportion = async (body: DepartmentProportion) => {
    return await api.post(`/proportion-department`, body);
}