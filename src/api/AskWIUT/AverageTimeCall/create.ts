import api from "../../api";

export interface AverageTimeCallCreation {
  name: string;
  value: number;
  calculated_date: string;
}

export const createAverageTimeCall = async (data: AverageTimeCallCreation) => {
  return await api.post("/askwiut-average-time-call", data);
};
