import api from "../../api";

export const deleteWeeklyCustomersCenterTrend = async (id: number) => {
  return await api.delete(`/askwiut-weekly-customers-center-trend/${id}`);
};
