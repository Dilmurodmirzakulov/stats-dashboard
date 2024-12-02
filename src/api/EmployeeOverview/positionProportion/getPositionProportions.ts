import api from '../../api';
export interface PositionProportionData{
    id: number;
    position_id: number;
    value: number;
    calculated_date: string;
    created_at: string;
    updated_at: string;
}
export const getPositionProportions = async (filteredMonth: string="") => {
    return await api.get(`/position-proportion?month=${filteredMonth}`);
}