import api from "../../api";

export const getFrequentInquiriesCenterLatest = async () => {
  return await api.get(`/askwiut-frequent-inquiries-center/latest`);
};
