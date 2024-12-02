import api from '../../api';

export const deleteContractDist = async (id: number) => {
    return await api.delete(`/contract-distribution/${id}`);
}