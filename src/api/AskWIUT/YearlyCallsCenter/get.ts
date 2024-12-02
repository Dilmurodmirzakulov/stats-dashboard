import api from "../../api";

export interface YearlyCallsCenterData {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getYearlyCallsCenter = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-yearly-calls-center?month=${filteredMonth}`);
};
