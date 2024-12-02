import api from "../../api";

export const deleteBotInquiries = async (id: number) => {
  return await api.delete(`/askwiut-bot-inquiries/${id}`);
};
