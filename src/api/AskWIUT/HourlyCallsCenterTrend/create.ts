import api from "../../api";

export interface HourlyCallsCenterTrendCreation {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const createHourlyCallsCenterTrend = async (
  data: HourlyCallsCenterTrendCreation
) => {
  return await api.post("/askwiut-hourly-calls-center-trend", data);
};
