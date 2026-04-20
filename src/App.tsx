import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RefreshControl } from "@/components/refresh-control";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

interface BehaviorProps {
  title: string;
  desc: string;
}

const refreshInfo = { timestamp: 1710000000000, refreshBehavior: "soft" };

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 6 * 60 * 1000, // ? 5 mins
      retry: 2,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <RefreshControl />
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 space-y-8">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Controlling App Refresh in React
            </h1>
            <p className="text-gray-500 mt-2">
              Soft, Hard, or No Refresh — a practical approach
            </p>
          </div>

          {/* Intro */}
          <section className="space-y-4">
            <p className="text-gray-700">
              Most apps deploy new versions and just hope users refresh. But in
              reality, users keep tabs open for hours, sometimes days.
            </p>
            <p className="text-gray-700">
              This leads to outdated UI, mismatched APIs, and subtle bugs.
            </p>
            <p className="text-gray-700">
              Here’s a simple pattern to control that.
            </p>
          </section>

          {/* Meta Example */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Meta File</h2>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
              {JSON.stringify(refreshInfo, null, 2)}
            </pre>
          </section>

          {/* Flow */}
          <section>
            <h2 className="text-xl font-semibold mb-3">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Build Time">Generate meta.json with timestamp</Card>
              <Card title="Client Check">Poll file using React Query</Card>
              <Card title="Decision">Hard / Soft / Ignore refresh</Card>
            </div>
          </section>

          {/* Behavior */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Refresh Modes</h2>
            <div className="space-y-3">
              <Behavior title="Hard Refresh" desc="Force reload immediately" />
              <Behavior title="Soft Refresh" desc="Prompt user to refresh" />
              <Behavior title="No Refresh" desc="Ignore update" />
            </div>
          </section>

          {/* CTA */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Why this matters
            </h3>
            <p className="text-blue-800">
              You avoid stale UI, reduce bugs, and give users a predictable
              experience.
            </p>
          </section>
        </div>
      </div>
    </QueryClientProvider>
  );
}

function Card(props: CardProps) {
  const { title, children } = props;

  return (
    <div className="p-4 border rounded-xl bg-gray-50">
      <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}

function Behavior(props: BehaviorProps) {
  const { title, desc } = props;

  return (
    <div className="flex items-center justify-between border p-4 rounded-lg">
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      <span className="text-xs bg-gray-200 px-2 py-1 rounded">Mode</span>
    </div>
  );
}
