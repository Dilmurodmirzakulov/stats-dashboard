import api from "../../api";

export interface FrequentInquiriesByCategoryCreation {
  name: string;
  value: number;
  calculated_date: string;
}

export const createFrequentInquiriesByCategory = async (data: FrequentInquiriesByCategoryCreation) => {
  return await api.post("/askwiut-frequent-inquiries-category", data);
};
