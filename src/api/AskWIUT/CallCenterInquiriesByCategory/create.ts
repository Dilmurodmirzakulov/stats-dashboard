import api from "../../api";

export interface CallCenterInquiriesByCategoryCreation {
  name: string;
  value: number;
  calculated_date: string;
}

export const createCallCenterInquiriesByCategory = async (
  data: CallCenterInquiriesByCategoryCreation
) => {
  return await api.post("/askwiut-call-center-inquiries-category", data);
};
