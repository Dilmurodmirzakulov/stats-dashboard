import api from "../../api";

export interface BotInquiriesUpdate {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
}

export const updateBotInquiries = async (data: BotInquiriesUpdate) => {
  return await api.put(`/askwiut-bot-inquiries/${data.id}`, data);
};
