import api from "../../api";

export const getBotInquiriesTrendLatest = async () => {
  return await api.get(`/askwiut-bot-inquiries-trend/latest`);
};
