import api from "../../api";

export interface WeeklyCustomersCenterTrendCreation {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const createWeeklyCustomersCenterTrend = async (
  data: WeeklyCustomersCenterTrendCreation
) => {
  return await api.post("/askwiut-weekly-customers-center-trend", data);
};
