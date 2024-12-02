import api from "../../api";

export interface BotInquiriesTrendUpdate {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const updateBotInquiriesTrend = async (data: BotInquiriesTrendUpdate) => {
  return await api.put(`/askwiut-bot-inquiries-trend/${data.id}`, data);
};
