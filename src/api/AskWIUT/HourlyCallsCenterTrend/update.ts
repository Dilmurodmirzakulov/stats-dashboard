import api from "../../api";

export interface HourlyCallsCenterTrendUpdate {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const updateHourlyCallsCenterTrend = async (
  data: HourlyCallsCenterTrendUpdate
) => {
  return await api.put(`/askwiut-hourly-calls-center-trend/${data.id}`, data);
};
