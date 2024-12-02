import api from "../../api";

export const getFrequentInquiriesCenterTrendLatest = async () => {
  return await api.get(`/askwiut-frequent-inquiries-center-trend/latest`);
};
