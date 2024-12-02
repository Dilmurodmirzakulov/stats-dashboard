import api from "../../api";

export const deleteNumberOfInquiriesByType = async (id: number) => {
  return await api.delete(`/askwiut-inquiries-by-type/${id}`);
};
