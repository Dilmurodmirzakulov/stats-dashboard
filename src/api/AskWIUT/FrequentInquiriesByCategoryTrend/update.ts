import api from "../../api";

export interface FrequentInquiriesByCategoryTrendUpdate {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const updateFrequentInquiriesByCategoryTrend = async (
  data: FrequentInquiriesByCategoryTrendUpdate
) => {
  return await api.put(
    `/askwiut-frequent-inquiries-category-trend/${data.id}`,
    data
  );
};
