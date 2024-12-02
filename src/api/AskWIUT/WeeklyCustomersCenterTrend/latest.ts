import api from "../../api";

export const getWeeklyCustomersCenterTrendLatest = async () => {
  return await api.get(`/askwiut-weekly-customers-center-trend/latest`);
};
