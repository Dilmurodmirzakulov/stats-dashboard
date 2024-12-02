import api from '../../api';

export interface GenderUpdate {
    id: number
    gender: number
    value: number     
    calculated_date: string
}

export const updateGender = async (body: GenderUpdate) => {
    return await api.put(`/gender-staff/${body.id}`, body);
}