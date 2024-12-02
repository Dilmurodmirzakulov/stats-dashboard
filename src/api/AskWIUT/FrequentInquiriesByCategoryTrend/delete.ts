import api from "../../api";

export const deleteFrequentInquiriesByCategoryTrend = async (id: number) => {
  return await api.delete(`/askwiut-frequent-inquiries-category-trend/${id}`);
};
