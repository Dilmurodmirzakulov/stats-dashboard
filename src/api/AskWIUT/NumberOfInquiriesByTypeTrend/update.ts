import api from "../../api";

export interface NumberOfInquiriesByTypeTrendUpdate {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const updateNumberOfInquiriesByTypeTrend = async (
  data: NumberOfInquiriesByTypeTrendUpdate
) => {
  return await api.put(`/askwiut-inquiries-by-type-trend/${data.id}`, data);
};
