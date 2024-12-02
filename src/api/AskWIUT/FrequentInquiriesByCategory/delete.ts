import api from "../../api";

export const deleteFrequentInquiriesByCategory = async (id: number) => {
  return await api.delete(`/askwiut-frequent-inquiries-category/${id}`);
};
