import api from "../../api";

export interface WeeklyCustomersCenterCreation {
  name: string;
  value: number;
  calculated_date: string;
}

export const createWeeklyCustomersCenter = async (data: WeeklyCustomersCenterCreation) => {
  return await api.post("/askwiut-weekly-customers-center", data);
};
