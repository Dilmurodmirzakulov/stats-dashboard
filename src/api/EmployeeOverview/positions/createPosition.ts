import api from '../../api';

export interface CreatePosition {
    name: string
}

export const createPosition = async (body: CreatePosition) => {
    return await api.post(`/positions`, body);
}