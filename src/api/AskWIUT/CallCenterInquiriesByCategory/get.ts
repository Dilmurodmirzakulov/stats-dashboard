import api from "../../api";

export interface CallCenterInquiriesByCategoryData {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getCallCenterInquiriesByCategory = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-call-center-inquiries-category?month=${filteredMonth}`);
};
