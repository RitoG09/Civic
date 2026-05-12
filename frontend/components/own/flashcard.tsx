"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useIssueStore } from "@/store/issue-store";
import { Issue } from "@/types/issue";
import { ShieldCheck, Send, Mail, AlertTriangle, Layers, Zap } from "lucide-react";

export default function AIFlashCard({ image }: any) {
  const router = useRouter();
  const { addIssue } = useIssueStore();

  const issue: Issue = {
    id: crypto.randomUUID(),
    type: "garbage",
    image,
    description: "Large garbage accumulation near roadside",
    location: "Whitefield, Bangalore",
    priority: "HIGH",
    confidence: 94,
    aiSummary: "Plastic and mixed waste detected",
    createdAt: new Date().toISOString(),
  };

  const handlePost = () => {
    addIssue(issue);
    router.push("/feed");
  };

  const handleEmail = () => {
    addIssue(issue);
    router.push(`/tracking/${issue.id}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="h-full"
    >
      <Card className="relative h-full overflow-hidden rounded-[2.5rem] bg-white/5 backdrop-blur-3xl border border-white/10 p-8 text-white shadow-2xl">
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full space-y-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <h2 className="text-2xl font-bold tracking-tight">AI Analysis</h2>
              </div>
              <p className="text-zinc-400 text-sm">
                CivicSense deep learning verification
              </p>
            </div>
            
            <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1.5 flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
              <ShieldCheck className="w-4 h-4" /> AI Verified
            </Badge>
          </div>

          <div className="flex-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Layers className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 mb-0.5">Garbage Type</p>
                <h3 className="text-lg font-semibold text-white">Plastic + Mixed Waste</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 mb-0.5">Priority Level</p>
                <Badge className="bg-orange-500/20 text-orange-400 border-none px-2 py-0.5 text-xs font-bold uppercase tracking-wider">
                  High Priority
                </Badge>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              className="bg-white/5 rounded-2xl p-5 border border-white/5 space-y-3"
            >
              <div className="flex justify-between items-end">
                <p className="text-sm text-zinc-400">Model Confidence</p>
                <p className="text-xl font-bold text-white tracking-tight">94%</p>
              </div>
              <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: "94%" }} transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                />
              </div>
            </motion.div>
          </div>

          <div className="space-y-3 pt-4 mt-auto">
            <Button
              onClick={handlePost}
              className="w-full h-12 text-base font-medium rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-none shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all flex items-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> 
              Post to Public Feed
            </Button>

            <Button 
              onClick={handleEmail} 
              variant="outline" 
              className="w-full h-12 text-base font-medium rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Notify Civic Authority
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
