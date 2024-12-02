import api from "../../api";

export interface WeeklyCallsCenterTrendCreation {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const createWeeklyCallsCenterTrend = async (
  data: WeeklyCallsCenterTrendCreation
) => {
  return await api.post("/askwiut-weekly-calls-center-trend", data);
};
