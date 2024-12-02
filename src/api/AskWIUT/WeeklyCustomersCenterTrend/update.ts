import api from "../../api";

export interface WeeklyCustomersCenterTrendUpdate {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const updateWeeklyCustomersCenterTrend = async (
  data: WeeklyCustomersCenterTrendUpdate
) => {
  return await api.put(
    `/askwiut-weekly-customers-center-trend/${data.id}`,
    data
  );
};
