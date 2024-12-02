import api from "../../api";

export interface FrequentInquiriesCenterTrendCreation {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const createFrequentInquiriesCenterTrend = async (
  data: FrequentInquiriesCenterTrendCreation
) => {
  return await api.post("/askwiut-frequent-inquiries-center-trend", data);
};
