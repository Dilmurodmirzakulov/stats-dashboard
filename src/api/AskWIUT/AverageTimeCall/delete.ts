import api from "../../api";

export const deleteAverageTimeCall = async (id: number) => {
  return await api.delete(`/askwiut-average-time-call/${id}`);
};
