import api from "../../api";

export const deleteYearlyTotalMinCalls = async (id: number) => {
  return await api.delete(`/askwiut-yearly-total-min-calls/${id}`);
};
