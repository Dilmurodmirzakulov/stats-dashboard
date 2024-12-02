import api from "../../api";

export interface YearlyCallsCenterUpdate {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
}

export const updateYearlyCallsCenter = async (data: YearlyCallsCenterUpdate) => {
  return await api.put(`/askwiut-yearly-calls-center/${data.id}`, data);
};
