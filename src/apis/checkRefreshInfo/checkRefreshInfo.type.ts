export type RefreshBehaviorT = "soft" | "hard" | "none";

export type CheckRefreshInfoResponse = {
  timestamp: string;
  refreshBehavior?: RefreshBehaviorT;
};

export type UseCheckRefreshInfoArgs = {
  onSuccess: (data: CheckRefreshInfoResponse) => void;
};
