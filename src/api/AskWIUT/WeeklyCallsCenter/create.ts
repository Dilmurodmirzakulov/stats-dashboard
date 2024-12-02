import api from "../../api";

export interface WeeklyCallsCenterCreation {
  name: string;
  value: number;
  calculated_date: string;
}

export const createWeeklyCallsCenter = async (data: WeeklyCallsCenterCreation) => {
  return await api.post("/askwiut-weekly-calls-center", data);
};
