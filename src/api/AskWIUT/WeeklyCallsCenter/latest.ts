import api from "../../api";

export const getWeeklyCallsCenterLatest = async () => {
  return await api.get(`/askwiut-weekly-calls-center/latest`);
};
