import api from '../../api';
import { Position } from './getPositions';

export const updatePosition = async (body: Position) => {
    return await api.put(`/positions/${body.id}`, body);
}