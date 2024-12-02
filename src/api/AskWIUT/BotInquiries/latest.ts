import api from "../../api";

export const getBotInquiriesLatest = async () => {
  return await api.get(`/askwiut-bot-inquiries/latest`);
};
