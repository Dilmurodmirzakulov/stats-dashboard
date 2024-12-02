import api from '../../api';
export interface ShiftDistData{
    id: number         
    shift_type: number
    value: number     
    calculated_date: string
    created_at: string    
    updated_at: string
}

export const getShiftDists = async (filteredMonth: string="") => {
    return await api.get(`/shift-distribution?month=${filteredMonth}`);
}