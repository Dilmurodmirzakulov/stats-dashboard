import api from "../../api";

export const getCallCenterInquiriesByCategoryTrendLatest = async () => {
  return await api.get(`/askwiut-call-center-inquiries-category-trend/latest`);
};
