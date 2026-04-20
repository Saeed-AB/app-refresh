import type { RefreshBehaviorT } from "../apis/checkRefreshInfo/checkRefreshInfo.type";

const isSoftUpdate = (behavior?: RefreshBehaviorT) => behavior === "soft";
const isHardUpdate = (behavior?: RefreshBehaviorT) => behavior === "hard";
const isRefreshDisabled = (behavior?: RefreshBehaviorT) => behavior === "none" || !behavior;

export { isRefreshDisabled, isSoftUpdate, isHardUpdate };

