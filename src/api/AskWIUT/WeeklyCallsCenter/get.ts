import api from "../../api";

export interface WeeklyCallsCenterData {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getWeeklyCallsCenter = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-weekly-calls-center?month=${filteredMonth}`);
};
