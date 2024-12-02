import api from "../../api";

export const deleteWeeklyCustomersCenter = async (id: number) => {
  return await api.delete(`/askwiut-weekly-customers-center/${id}`);
};
