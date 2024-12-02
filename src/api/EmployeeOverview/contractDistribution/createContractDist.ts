import api from '../../api';

export interface CreateContractDist {
    contract_type: number
    value: number     
    calculated_date: string
}

export const createContractDist = async (body: CreateContractDist) => {
    return await api.post(`/contract-distribution`, body);
}