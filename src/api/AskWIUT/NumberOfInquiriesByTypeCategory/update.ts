import api from "../../api";

export interface NumberOfInquiriesByTypeCategoryUpdate {
  id: number;
  name: string;
}

export const updateNumberOfInquiriesByTypeCategory = async (
  data: NumberOfInquiriesByTypeCategoryUpdate
) => {
  return await api.put(`/askwiut-inquiries-by-type-category/${data.id}`, data);
};
