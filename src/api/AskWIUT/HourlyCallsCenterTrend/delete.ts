import api from "../../api";

export const deleteHourlyCallsCenterTrend = async (id: number) => {
  return await api.delete(`/askwiut-hourly-calls-center-trend/${id}`);
};
