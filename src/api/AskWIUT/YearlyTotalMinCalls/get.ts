import api from "../../api";

export interface YearlyTotalMinCallsData {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getYearlyTotalMinCalls = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-yearly-total-min-calls?month=${filteredMonth}`);
};
