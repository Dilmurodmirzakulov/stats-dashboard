import api from "../../api";

export interface BotInquiriesCreation {
  name: string;
  value: number;
  calculated_date: string;
}

export const createBotInquiries = async (data: BotInquiriesCreation) => {
  return await api.post("/askwiut-bot-inquiries", data);
};
