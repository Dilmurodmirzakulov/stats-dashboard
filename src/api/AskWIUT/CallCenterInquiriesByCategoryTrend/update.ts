import api from "../../api";

export interface CallCenterInquiriesByCategoryTrendUpdate {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const updateCallCenterInquiriesByCategoryTrend = async (
  data: CallCenterInquiriesByCategoryTrendUpdate
) => {
  return await api.put(
    `/askwiut-call-center-inquiries-category-trend/${data.id}`,
    data
  );
};
