import api from '../../api';
export interface Age{
    id: number
    name: string
}
export const getAges = async () => {
    return await api.get(`/ages`);
}