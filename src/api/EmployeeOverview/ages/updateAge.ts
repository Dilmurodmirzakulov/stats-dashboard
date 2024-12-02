import api from '../../api';
import { Age } from './getAges';

export const updateAge = async (body: Age) => {
    return await api.put(`/ages/${body.id}`, body);
}