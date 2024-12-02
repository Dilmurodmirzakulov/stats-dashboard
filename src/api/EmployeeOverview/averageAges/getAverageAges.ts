import api from '../../api';
export interface AverageAgeData{
    id: number;
    age_id: number;
    value: number;
    calculated_date: string;
    created_at: string;
    updated_at: string;
}
export const getAverageAges = async (filteredMonth: string="") => {
    return await api.get(`/average-ages?month=${filteredMonth}`);
}