import api from "../../api";

export interface AverageTimeCallData {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
  created_at: string;
  updated_at: string;
}

export const getAverageTimeCall = async (filteredMonth: string = "") => {
  return await api.get(`/askwiut-average-time-call?month=${filteredMonth}`);
};
