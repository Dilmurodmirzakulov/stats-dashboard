import api from '../../api';

export interface ShiftDistUpdate {
    id: number
    shift_type: number
    value: number     
    calculated_date: string
}

export const updateShiftDist = async (body: ShiftDistUpdate) => {
    return await api.put(`/shift-distribution/${body.id}`, body);
}