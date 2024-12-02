import api from "../../api";

export const getNumberOfInquiriesByTypeLatest = async () => {
  return await api.get(`/askwiut-inquiries-by-type/latest`);
};
