import api from "../../api";

export const getNumberOfInquiriesByTypeTrendLatest = async () => {
  return await api.get(`/askwiut-inquiries-by-type-trend/latest`);
};
