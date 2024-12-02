import api from "../../api";

export interface BotInquiriesData {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getBotInquiries = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-bot-inquiries?month=${filteredMonth}`);
};
