import api from "../../api";

export const getCallCenterInquiriesByCategoryLatest = async () => {
  return await api.get(`/askwiut-call-center-inquiries-category/latest`);
};
