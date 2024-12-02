import api from "../../api";

export const getYearlyTotalMinCallsLatest = async () => {
  return await api.get(`/askwiut-yearly-total-min-calls/latest`);
};
