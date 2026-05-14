import { useQuery } from "@tanstack/react-query";
import * as AppService from "../services/app.service";
import type { ShowData } from "../interfaces/ShowData";

export function useShowData() {
  return useQuery<ShowData[]>({
    queryKey: ["showData"],
    queryFn: async () => {
      return await AppService.getShowData();
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
