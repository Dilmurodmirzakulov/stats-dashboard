import api from "../../api";

export const getYearlyCallsCenterLatest = async () => {
  return await api.get(`/askwiut-yearly-calls-center/latest`);
};
