import api from "../../api";

export interface FrequentInquiriesCenterCreation {
  name: string;
  value: number;
  calculated_date: string;
}

export const createFrequentInquiriesCenter = async (data: FrequentInquiriesCenterCreation) => {
  return await api.post("/askwiut-frequent-inquiries-center", data);
};
