import api from "../../api";

export interface YearlyCallsCenterCreation {
  name: string;
  value: number;
  calculated_date: string;
}

export const createYearlyCallsCenter = async (data: YearlyCallsCenterCreation) => {
  return await api.post("/askwiut-yearly-calls-center", data);
};
