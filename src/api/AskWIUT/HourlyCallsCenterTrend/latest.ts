import api from "../../api";

export const getHourlyCallsCenterTrendLatest = async () => {
  return await api.get(`/askwiut-hourly-calls-center-trend/latest`);
};
