import api from "../../api";

export const getWeeklyCustomersCenterLatest = async () => {
  return await api.get(`/askwiut-weekly-customers-center/latest`);
};
