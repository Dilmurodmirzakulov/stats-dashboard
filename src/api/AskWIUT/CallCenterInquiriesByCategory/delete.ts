import api from "../../api";

export const deleteCallCenterInquiriesByCategory = async (id: number) => {
  return await api.delete(`/askwiut-call-center-inquiries-category/${id}`);
};
