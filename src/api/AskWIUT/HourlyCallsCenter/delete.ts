import api from "../../api";

export const deleteHourlyCallsCenter = async (id: number) => {
  return await api.delete(`/askwiut-hourly-calls-center/${id}`);
};
