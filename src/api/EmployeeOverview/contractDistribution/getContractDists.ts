import api from '../../api';
export interface ContractDistData{
    id: number         
    contract_type: number
    value: number     
    calculated_date: string
    created_at: string    
    updated_at: string
}

export const getContractDists = async (filteredMonth: string="") => {
    return await api.get(`/contract-distribution?month=${filteredMonth}`);
}