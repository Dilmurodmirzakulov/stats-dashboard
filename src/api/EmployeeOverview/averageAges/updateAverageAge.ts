import api from '../../api';
import { AverageAge } from './createAverageAge';

export const updateAverageAge = async (body: AverageAge) => {
    return await api.put(`/average-ages/${body.id}`, body);
}