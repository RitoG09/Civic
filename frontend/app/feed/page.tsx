"use client";

import { useIssueStore } from "@/store/issue-store";
import IssueCard from "@/components/own/issue-card";

export default function FeedPage() {
  const { issues } = useIssueStore();

  return (
    <div className="min-h-screen bg-[#09090B] text-white p-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Public Civic Feed</h1>

        <p className="text-zinc-400 mt-2">
          Live community reported civic issues.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
}
