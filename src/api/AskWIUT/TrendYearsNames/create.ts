import api from "../../api";

export interface TrendYearsNamesCreation {
  name1: string;
  name2: string;
  name3: string;
  calculated_date: string;
}

export const createTrendYearsNames = async (data: TrendYearsNamesCreation) => {
  return await api.post("/askwiut-trend-names", data);
};
