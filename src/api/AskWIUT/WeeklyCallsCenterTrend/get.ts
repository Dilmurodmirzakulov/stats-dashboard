import api from "../../api";

export interface WeeklyCallsCenterTrendData {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getWeeklyCallsCenterTrend = async (filteredMonth: string = "") => {
  return await api.get(
    `/askwiut-weekly-calls-center-trend?month=${filteredMonth}`
  );
};
