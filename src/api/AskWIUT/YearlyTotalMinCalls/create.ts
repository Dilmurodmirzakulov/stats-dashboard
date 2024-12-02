import api from "../../api";

export interface YearlyTotalMinCallsCreation {
  name: string;
  value: number;
  calculated_date: string;
}

export const createYearlyTotalMinCalls = async (data: YearlyTotalMinCallsCreation) => {
  return await api.post("/askwiut-yearly-total-min-calls", data);
};
