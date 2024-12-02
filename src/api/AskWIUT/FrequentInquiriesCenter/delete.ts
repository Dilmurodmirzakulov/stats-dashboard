import api from "../../api";

export const deleteFrequentInquiriesCenter = async (id: number) => {
  return await api.delete(`/askwiut-frequent-inquiries-center/${id}`);
};
