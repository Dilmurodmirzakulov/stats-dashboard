import api from '../../api';

export interface ContractDistUpdate {
    id: number
    contract_type: number
    value: number     
    calculated_date: string
}

export const updateContractDist = async (body: ContractDistUpdate) => {
    return await api.put(`/contract-distribution/${body.id}`, body);
}