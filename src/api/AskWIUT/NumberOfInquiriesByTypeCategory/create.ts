import api from "../../api";

export interface NumberOfInquiriesByTypeCategoryCreation {
  name: string;
}

export const createNumberOfInquiriesByTypeCategory = async (data: NumberOfInquiriesByTypeCategoryCreation) => {
  return await api.post("/askwiut-inquiries-by-type-category", data);
};
