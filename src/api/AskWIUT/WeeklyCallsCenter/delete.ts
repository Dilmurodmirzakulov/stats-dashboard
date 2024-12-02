import api from "../../api";

export const deleteWeeklyCallsCenter = async (id: number) => {
  return await api.delete(`/askwiut-weekly-calls-center/${id}`);
};
