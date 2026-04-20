import { useState } from "react";
import { createPortal } from "react-dom";
import { isHardUpdate, isSoftUpdate } from "@/utils/refresh-behavior";
import type {
  RefreshBehaviorT,
  CheckRefreshInfoResponse,
} from "@/apis/checkRefreshInfo/checkRefreshInfo.type";
import { useCheckRefreshInfo } from "@/apis/checkRefreshInfo";

type VersionInfoStateT = {
  timestamp: number | null;
  refreshBehavior?: RefreshBehaviorT;
};

const RefreshControl = () => {
  const [showToast, setShowToast] = useState(false);
  const [refreshInfo, setRefreshInfo] = useState<VersionInfoStateT>({
    timestamp: null,
  });

  const onSuccess = (data: CheckRefreshInfoResponse) => {
    const { timestamp: newTimestamp, refreshBehavior: newRefreshBehavior } =
      data;

    // ? First render of the app, set the timestamp and refresh behavior
    if (!refreshInfo.timestamp && newTimestamp) {
      setRefreshInfo({
        timestamp: +newTimestamp,
        refreshBehavior: newRefreshBehavior,
      });
      return;
    }

    const isNewVersionAvailable =
      refreshInfo.timestamp && +newTimestamp > refreshInfo.timestamp;

    // ? If new version is available and current version is less than last supported version, force hard refresh
    if (isNewVersionAvailable && isHardUpdate(newRefreshBehavior)) {
      window.location.reload();
      return;
    }

    if (isNewVersionAvailable && isSoftUpdate(newRefreshBehavior)) {
      setShowToast(true);
      return;
    }
  };

  useCheckRefreshInfo({
    onSuccess,
  });

  if (!showToast) {
    return null;
  }

  const popperContent = (
    <div
      data-testid="app-prompt-update-container"
      className="fixed bottom-4 right-4 z-50 max-w-sm"
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 animate-in slide-in-from-bottom-2 duration-300">
        <h3 className="text-gray-900 font-medium">New Version Available</h3>

        <p className="text-gray-600 mb-3">
          A new version of the application is available. Please refresh the page
          to get the latest updates.
        </p>
        <div className="flex gap-2 justify-end mt-4">
          <button
            onClick={() => window.location.reload()}
            data-testid="app-prompt-update-refresh-button"
            className="cursor-pointer p-2 border border-gray-200 rounded-lg hover:bg-gray-100"
          >
            Refresh Now
          </button>

          <button
            onClick={() => setShowToast(false)}
            data-testid="app-prompt-update-later-button"
            className="cursor-pointer p-2 bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 rounded-lg"
          >
            Refresh Later
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(popperContent, document.body);
};

export { RefreshControl };
