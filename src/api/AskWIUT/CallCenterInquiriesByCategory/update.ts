import api from "../../api";

export interface CallCenterInquiriesByCategoryUpdate {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
}

export const updateCallCenterInquiriesByCategory = async (data: CallCenterInquiriesByCategoryUpdate) => {
  return await api.put(`/askwiut-call-center-inquiries-category/${data.id}`, data);
};
