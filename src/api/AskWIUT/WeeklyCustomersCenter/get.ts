import api from "../../api";

export interface WeeklyCustomersCenterData {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getWeeklyCustomersCenter = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-weekly-customers-center?month=${filteredMonth}`);
};
