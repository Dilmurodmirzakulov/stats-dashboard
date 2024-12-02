import api from '../../api';
export interface Position{
    id: number
    name: string
}
export const getPositions = async () => {
    return await api.get(`/positions`);
}