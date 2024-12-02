import api from "../../api";

export interface NumberOfInquiriesByTypeUpdate {
  id: number;
  name: string;
  category_id: number;
  value: number;
  calculated_date: string;
}

export const updateNumberOfInquiriesByType = async (data: NumberOfInquiriesByTypeUpdate) => {
  return await api.put(`/askwiut-inquiries-by-type/${data.id}`, data);
};
