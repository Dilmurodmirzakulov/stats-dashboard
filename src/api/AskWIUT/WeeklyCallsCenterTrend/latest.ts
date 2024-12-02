import api from "../../api";

export const getWeeklyCallsCenterTrendLatest = async () => {
  return await api.get(`/askwiut-weekly-calls-center-trend/latest`);
};
