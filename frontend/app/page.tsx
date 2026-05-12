"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/own/sidebar";
import UploadBox from "@/components/own/upload";
import AIFlashCard from "@/components/own/flashcard";
import { useState } from "react";

export default function HomePage() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#09090B] text-white w-full">
        <AppSidebar />

        <main className="grid grid-cols-12 gap-6 p-6 w-full">
          <div className="col-span-7">
            <div className="mb-6">
              <h1 className="text-4xl font-bold">
                AI Civic Monitoring Dashboard
              </h1>

              <p className="text-zinc-400 mt-2">
                Upload garbage or pothole issues for AI verification.
              </p>
            </div>

            <UploadBox onAnalyze={setImage} />
          </div>

          <div className="col-span-5">
            {image ? (
              <AIFlashCard image={image} />
            ) : (
              <div className="h-full rounded-3xl border border-dashed border-white/10 flex items-center justify-center text-zinc-500">
                Upload an image to generate AI summary
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
