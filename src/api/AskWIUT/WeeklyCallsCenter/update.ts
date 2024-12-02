import api from "../../api";

export interface WeeklyCallsCenterUpdate {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
}

export const updateWeeklyCallsCenter = async (data: WeeklyCallsCenterUpdate) => {
  return await api.put(`/askwiut-weekly-calls-center/${data.id}`, data);
};
