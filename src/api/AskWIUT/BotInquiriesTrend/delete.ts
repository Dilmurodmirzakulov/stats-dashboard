import api from "../../api";

export const deleteBotInquiriesTrend = async (id: number) => {
  return await api.delete(`/askwiut-bot-inquiries-trend/${id}`);
};
