import api from '../../api';

export interface AverageAge {
    id?: number 
    age_id: number;
    value: number;
    calculated_date: string;
}

export const createAverageAge = async (body: AverageAge) => {
    return await api.post(`/average-ages`, body);
}