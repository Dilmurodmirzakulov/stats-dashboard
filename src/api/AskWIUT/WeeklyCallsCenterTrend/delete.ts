import api from "../../api";

export const deleteWeeklyCallsCenterTrend = async (id: number) => {
  return await api.delete(`/askwiut-weekly-calls-center-trend/${id}`);
};
