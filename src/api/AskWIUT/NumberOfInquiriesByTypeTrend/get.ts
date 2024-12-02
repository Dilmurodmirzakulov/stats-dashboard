import api from "../../api";

export interface NumberOfInquiriesByTypeTrendData {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getNumberOfInquiriesByTypeTrend = async (
  filteredMonth: string = ""
) => {
  return await api.get(
    `/askwiut-inquiries-by-type-trend?month=${filteredMonth}`
  );
};
