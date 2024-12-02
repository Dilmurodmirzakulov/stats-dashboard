import api from '../../api';
export interface GenderData{
    id: number         
    gender: number
    value: number     
    calculated_date: string
    created_at: string    
    updated_at: string
}

export const getGenders = async (filteredMonth: string="") => {
    return await api.get(`/gender-staff?month=${filteredMonth}`);
}