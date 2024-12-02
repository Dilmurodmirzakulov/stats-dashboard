import api from "../../api";

export const deleteCallCenterInquiriesByCategoryTrend = async (id: number) => {
  return await api.delete(
    `/askwiut-call-center-inquiries-category-trend/${id}`
  );
};
