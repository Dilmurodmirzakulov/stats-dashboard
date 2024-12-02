import api from "../../api";

export interface HourlyCallsCenterUpdate {
  id: number;
  name: string;
  value: number;
  calculated_date: string;
}

export const updateHourlyCallsCenter = async (data: HourlyCallsCenterUpdate) => {
  return await api.put(`/askwiut-hourly-calls-center/${data.id}`, data);
};
