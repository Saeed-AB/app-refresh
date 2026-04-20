import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type {
  CheckRefreshInfoResponse,
  UseCheckRefreshInfoArgs,
} from "./checkRefreshInfo.type";

const CHECK_REFRESH_INFO_INTERVAL_MS = 43200000; // ? 12 * 60 * 60 * 1000 => 12 hour
const GET_CHECK_REFRESH_INFO_QUERY_KEY = ["check-refresh-info"];

const getCheckRefreshInfo = () =>
  axios.get<CheckRefreshInfoResponse>("/meta.json", {
    params: {
      t: Date.now(),
    },
  });

export const useCheckRefreshInfo = (args: UseCheckRefreshInfoArgs) => {
  return useQuery({
    refetchInterval: CHECK_REFRESH_INFO_INTERVAL_MS,
    refetchIntervalInBackground: true,
    queryKey: GET_CHECK_REFRESH_INFO_QUERY_KEY,
    queryFn: async () => {
      const response = await getCheckRefreshInfo();
      args.onSuccess(response.data);
      return response;
    },
  });
};
