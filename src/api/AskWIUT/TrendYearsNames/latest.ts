import api from "../../api";

export const getTrendYearsNamesLatest = async () => {
  return await api.get(`/askwiut-trend-names/latest`);
};
