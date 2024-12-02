import api from '../../api';

export const deleteGender = async (id: number) => {
    return await api.delete(`/gender-staff/${id}`);
}