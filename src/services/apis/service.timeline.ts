import http from "./http";

export const getTransactions = async (pageParam: number, filters: string) => {
  const response = await http.get(`/timeline?page=${pageParam}${filters}`);
  return response.data;
};

export const getCriticalTransactions = async () => {
  const response = await http.get(`/timeline/criticalTransactions`);
  return response.data;
};

export const getDetails = async (eventId: string) => {
  const response = await http.get(`/timeline/details/${eventId}`);
  return response.data;
};
