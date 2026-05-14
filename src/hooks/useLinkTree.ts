import { useQuery } from "@tanstack/react-query";
import * as AppService from "../services/app.service";
import type { LinkTree } from "../interfaces/LinkTree";

export function useLinkTree() {
  return useQuery<LinkTree[]>({
    queryKey: ["linkTree"],
    queryFn: async () => {
      return await AppService.getLinkTree();
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
