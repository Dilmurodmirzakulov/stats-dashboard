import api from "../../api";

export interface AverageTimeCallUpdate {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
}

export const updateAverageTimeCall = async (data: AverageTimeCallUpdate) => {
  return await api.put(`/askwiut-average-time-call/${data.id}`, data);
};
