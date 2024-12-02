import api from "../../api";

export const deleteTrendYearsNames = async (id: number) => {
  return await api.delete(`/askwiut-trend-names/${id}`);
};
