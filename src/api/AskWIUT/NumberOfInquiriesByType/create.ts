import api from "../../api";

export interface NumberOfInquiriesByTypeCreation {
  name: string;
  category_id: number;
  value: number;
  calculated_date: string;
}

export const createNumberOfInquiriesByType = async (data: NumberOfInquiriesByTypeCreation) => {
  return await api.post("/askwiut-inquiries-by-type", data);
};
