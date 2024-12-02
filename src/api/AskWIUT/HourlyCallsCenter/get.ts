import api from "../../api";

export interface HourlyCallsCenterData {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getHourlyCallsCenter = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-hourly-calls-center?month=${filteredMonth}`);
};
