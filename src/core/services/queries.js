// import { useQuery } from "@tanstack/react-query";
// import api from "../configs/api";
// const useGetProfile = () => {
//   const queryKey = ["profile"];
//   const queryFn = () => api.get("user/profile").then((res) => res || false);
//   return useQuery({ queryKey, queryFn });
// };

import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

export function useUserProfile() {
  const queryKey = ["userProfile"];
  const queryFn = () => api.get("user/profile").then((res) => res || false);
  return useQuery({ queryKey, queryFn });
}

export function useGetTours(query) {
  const queryKey = ["tours", query];
  const queryFn = () => api.get(`tour?${query}`);
  return useQuery({queryKey, queryFn});
}
