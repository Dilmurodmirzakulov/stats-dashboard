import api from '../../api';
import { PositionProportion } from './createPositionProportion';

export const updatePositionProportion = async (body: PositionProportion) => {
    return await api.put(`/position-proportion/${body.id}`, body);
}