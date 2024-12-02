import api from "../../api";

export interface YearlyTotalMinCallsUpdate {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
}

export const updateYearlyTotalMinCalls = async (data: YearlyTotalMinCallsUpdate) => {
  return await api.put(`/askwiut-yearly-total-min-calls/${data.id}`, data);
};
