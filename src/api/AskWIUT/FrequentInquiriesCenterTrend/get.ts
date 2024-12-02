import api from "../../api";

export interface FrequentInquiriesCenterTrendData {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getFrequentInquiriesCenterTrend = async (
  filteredMonth: string = ""
) => {
  return await api.get(
    `/askwiut-frequent-inquiries-center-trend?month=${filteredMonth}`
  );
};
