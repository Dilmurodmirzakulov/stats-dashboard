import api from '../../api';

export interface CreateShiftDist {
    shift_type: number
    value: number     
    calculated_date: string
}

export const createShiftDist = async (body: CreateShiftDist) => {
    return await api.post(`/shift-distribution`, body);
}