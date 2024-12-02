import api from "../../api";

export interface BotInquiriesTrendCreation {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const createBotInquiriesTrend = async (data: BotInquiriesTrendCreation) => {
  return await api.post("/askwiut-bot-inquiries-trend", data);
};
