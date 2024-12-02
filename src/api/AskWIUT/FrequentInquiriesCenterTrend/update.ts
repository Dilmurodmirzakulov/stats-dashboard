import api from "../../api";

export interface FrequentInquiriesCenterTrendUpdate {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const updateFrequentInquiriesCenterTrend = async (
  data: FrequentInquiriesCenterTrendUpdate
) => {
  return await api.put(
    `/askwiut-frequent-inquiries-center-trend/${data.id}`,
    data
  );
};
