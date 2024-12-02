import api from "../../api";

export const deleteYearlyCallsCenter = async (id: number) => {
  return await api.delete(`/askwiut-yearly-calls-center/${id}`);
};
