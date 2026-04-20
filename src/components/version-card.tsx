import React from 'react'

type Props = {
  version?: string | null
  onSoftRefresh: () => void
  onHardRefresh: () => void
}

const VersionCard: React.FC<Props> = ({ version, onSoftRefresh, onHardRefresh }) => {
  return (
    <div className="w-full max-w-xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-4">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">Application update</h3>
          <p className="text-sm text-gray-600 mt-1">
            A new version of the app may be available. You can apply a <strong>soft refresh</strong>
            to reload data and UI without a full page reload, or perform a <strong>hard reload</strong>
            to fully refresh the page (recommended when there are breaking changes).
          </p>

          {version ? (
            <p className="mt-3 text-xs text-gray-500">Latest version: {version}</p>
          ) : null}
        </div>

        <div className="flex flex-col items-end gap-2">
          <button
            onClick={onSoftRefresh}
            className="px-3 py-2 rounded-md bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm"
          >
            Soft Refresh
          </button>
          <button
            onClick={onHardRefresh}
            className="px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm"
          >
            Hard Reload
          </button>
        </div>
      </div>
    </div>
  )
}

export default VersionCard
