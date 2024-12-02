import api from "../../api";

export interface CallCenterInquiriesByCategoryTrendData {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getCallCenterInquiriesByCategoryTrend = async (
  filteredMonth: string = ""
) => {
  return await api.get(
    `/askwiut-call-center-inquiries-category-trend?month=${filteredMonth}`
  );
};
