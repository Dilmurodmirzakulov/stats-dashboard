import api from "../../api";

export interface HourlyCallsCenterCreation {
  name: string;
  value: number;
  calculated_date: string;
}

export const createHourlyCallsCenter = async (data: HourlyCallsCenterCreation) => {
  return await api.post("/askwiut-hourly-calls-center", data);
};
