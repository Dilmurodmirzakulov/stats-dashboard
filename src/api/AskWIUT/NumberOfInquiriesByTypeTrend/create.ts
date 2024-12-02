import api from "../../api";

export interface NumberOfInquiriesByTypeTrendCreation {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  calculated_date: string;
}

export const createNumberOfInquiriesByTypeTrend = async (
  data: NumberOfInquiriesByTypeTrendCreation
) => {
  return await api.post("/askwiut-inquiries-by-type-trend", data);
};
