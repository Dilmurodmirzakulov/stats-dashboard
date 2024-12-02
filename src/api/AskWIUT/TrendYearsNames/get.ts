import api from "../../api";

export interface TrendYearsNamesData {
  id: number;
  name1: string;
  name2: string;
  name3: string;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getTrendYearsNames = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-trend-names?month=${filteredMonth}`);
};
