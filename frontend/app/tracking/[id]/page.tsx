import TrackingTimeline from "@/components/own/tracking";

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Issue Tracking</h1>

          <p className="text-zinc-400 mt-2">Monitor complaint lifecycle.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <TrackingTimeline />
        </div>
      </div>
    </div>
  );
}
