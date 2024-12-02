import api from "../../api";

export const deleteFrequentInquiriesCenterTrend = async (id: number) => {
  return await api.delete(`/askwiut-frequent-inquiries-center-trend/${id}`);
};
