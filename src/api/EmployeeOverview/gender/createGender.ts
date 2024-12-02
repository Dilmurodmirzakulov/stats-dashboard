import api from '../../api';

export interface CreationGender {
    gender: number
    value: number     
    calculated_date: string
}

export const createGender = async (body: CreationGender) => {
    return await api.post(`/gender-staff`, body);
}