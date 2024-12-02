import api from "../../api";

export interface FrequentInquiriesByCategoryData {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getFrequentInquiriesByCategory = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-frequent-inquiries-category?month=${filteredMonth}`);
};
