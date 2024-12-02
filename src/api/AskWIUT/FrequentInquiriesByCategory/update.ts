import api from "../../api";

export interface FrequentInquiriesByCategoryUpdate {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
}

export const updateFrequentInquiriesByCategory = async (data: FrequentInquiriesByCategoryUpdate) => {
  return await api.put(`/askwiut-frequent-inquiries-category/${data.id}`, data);
};
