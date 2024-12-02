import api from "../../api";

export interface TrendYearsNamesUpdate {
  id: number;
  name1: string;
  name2: string;
  name3: string;
  calculated_date: string;
}

export const updateTrendYearsNames = async (data: TrendYearsNamesUpdate) => {
  return await api.put(`/askwiut-trend-names/${data.id}`, data);
};
