import api from "../../api";

export const deleteNumberOfInquiriesByTypeCategory = async (id: number) => {
  return await api.delete(`/askwiut-inquiries-by-type-category/${id}`);
};
