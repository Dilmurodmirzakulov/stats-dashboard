import api from "../../api";

export interface FrequentInquiriesCenterUpdate {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
}

export const updateFrequentInquiriesCenter = async (data: FrequentInquiriesCenterUpdate) => {
  return await api.put(`/askwiut-frequent-inquiries-center/${data.id}`, data);
};
