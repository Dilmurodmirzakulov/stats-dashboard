import api from "../../api";

export interface WeeklyCallsCenterTrendUpdate {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const updateWeeklyCallsCenterTrend = async (
  data: WeeklyCallsCenterTrendUpdate
) => {
  return await api.put(`/askwiut-weekly-calls-center-trend/${data.id}`, data);
};
