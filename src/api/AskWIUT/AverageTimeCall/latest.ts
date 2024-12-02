import api from "../../api";

export const getAverageTimeCallLatest = async () => {
  return await api.get(`/askwiut-average-time-call/latest`);
};
