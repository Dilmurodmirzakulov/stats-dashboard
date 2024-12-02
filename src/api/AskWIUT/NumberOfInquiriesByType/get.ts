import api from "../../api";

export interface NumberOfInquiriesByTypeData {
  id: number;
  name: string;
  category_id: number;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getNumberOfInquiriesByType = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-inquiries-by-type?month=${filteredMonth}`);
};
