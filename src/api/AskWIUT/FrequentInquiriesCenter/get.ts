import api from "../../api";

export interface FrequentInquiriesCenterData {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getFrequentInquiriesCenter = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-frequent-inquiries-center?month=${filteredMonth}`);
};
