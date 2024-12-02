import api from '../../api';

export interface CreateAge {
    name: string
}

export const createAge = async (body: CreateAge) => {
    return await api.post(`/ages`, body);
}