import api from "../../api";

export interface CallCenterInquiriesByCategoryTrendCreation {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const createCallCenterInquiriesByCategoryTrend = async (
  data: CallCenterInquiriesByCategoryTrendCreation
) => {
  return await api.post("/askwiut-call-center-inquiries-category-trend", data);
};
