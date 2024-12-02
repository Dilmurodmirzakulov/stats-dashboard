import api from "../../api";

export interface FrequentInquiriesByCategoryTrendCreation {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const createFrequentInquiriesByCategoryTrend = async (
  data: FrequentInquiriesByCategoryTrendCreation
) => {
  return await api.post("/askwiut-frequent-inquiries-category-trend", data);
};
