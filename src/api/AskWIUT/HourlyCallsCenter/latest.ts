import api from "../../api";

export const getHourlyCallsCenterLatest = async () => {
  return await api.get(`/askwiut-hourly-calls-center/latest`);
};
