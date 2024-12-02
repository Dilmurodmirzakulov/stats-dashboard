import api from "../../api";

export interface NumberOfInquiriesByTypeCategoryData {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export const getNumberOfInquiriesByTypeCategory = async (
  filteredMonth: string = ""
) => {
  return await api.get(
    `/askwiut-inquiries-by-type-category?month=${filteredMonth}`
  );
};
