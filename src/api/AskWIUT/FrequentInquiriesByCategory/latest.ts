import api from "../../api";

export const getFrequentInquiriesByCategoryLatest = async () => {
  return await api.get(`/askwiut-frequent-inquiries-category/latest`);
};
