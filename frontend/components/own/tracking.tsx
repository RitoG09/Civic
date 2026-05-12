"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";

export default function TrackingTimeline() {
  const steps = [
    { title: "Issue Uploaded", status: "completed", time: "Just now" },
    { title: "AI Verified", status: "completed", time: "1 min ago" },
    { title: "Complaint Generated", status: "completed", time: "1 min ago" },
    { title: "Email Sent to Authority", status: "completed", time: "2 mins ago" },
    { title: "Awaiting Authority Response", status: "current", time: "Pending" },
    { title: "Issue Resolved", status: "upcoming", time: "" },
  ];

  return (
    <div className="space-y-8 py-4 relative">
      <div className="absolute left-[19px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-blue-500 via-blue-500/50 to-white/5 rounded-full" />
      
      {steps.map((step, index) => (
        <motion.div 
          key={step.title} 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="flex gap-6 relative z-10"
        >
          <div className="flex flex-col items-center mt-1">
            {step.status === "completed" ? (
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            ) : step.status === "current" ? (
              <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                <Loader2 className="w-5 h-5 animate-spin" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500">
                <Circle className="w-4 h-4" />
              </div>
            )}
          </div>

          <div className={`flex-1 ${step.status === "upcoming" ? "opacity-50" : ""}`}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-300">
              <div className="flex justify-between items-start">
                <h3 className={`font-semibold text-lg ${
                  step.status === "current" ? "text-orange-400" : 
                  step.status === "completed" ? "text-white" : "text-zinc-400"
                }`}>
                  {step.title}
                </h3>
                <span className="text-xs text-zinc-500 bg-black/40 px-3 py-1 rounded-full">
                  {step.time}
                </span>
              </div>
              
              {step.status === "current" && (
                <p className="text-zinc-400 text-sm mt-2">
                  The relevant civic authority has been notified and we are awaiting their acknowledgment and action plan.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
