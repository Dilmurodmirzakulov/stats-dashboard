import api from "../../api";

export const deleteNumberOfInquiriesByTypeTrend = async (id: number) => {
  return await api.delete(`/askwiut-inquiries-by-type-trend/${id}`);
};
