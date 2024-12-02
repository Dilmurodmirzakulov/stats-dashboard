import api from '../../api';
export interface DepartmentProportionData{
    id: number;
    proportion_id: number;
    value: number;
    calculated_date: string;
    created_at: string;
    updated_at: string;
}
export const getDepartmentProportions = async (filteredMonth: string="") => {
    return await api.get(`/proportion-department?month=${filteredMonth}`);
}