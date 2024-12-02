import api from "../../api";

export interface WeeklyCustomersCenterUpdate {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
}

export const updateWeeklyCustomersCenter = async (data: WeeklyCustomersCenterUpdate) => {
  return await api.put(`/askwiut-weekly-customers-center/${data.id}`, data);
};
