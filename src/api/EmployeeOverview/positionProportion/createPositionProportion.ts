import api from '../../api';

export interface PositionProportion {
    id?: number 
    position_id: number;
    value: number;
    calculated_date: string;
}

export const createPositionProportion = async (body: PositionProportion) => {
    return await api.post(`/position-proportion`, body);
}