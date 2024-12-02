import api from "../../api";

export const getFrequentInquiriesByCategoryTrendLatest = async () => {
  return await api.get(`/askwiut-frequent-inquiries-category-trend/latest`);
};
