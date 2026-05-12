import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MapPin, AlertCircle } from "lucide-react";

export default function IssueCard({ issue }: any) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "CRITICAL":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "HIGH":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "MEDIUM":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      default:
        return "bg-green-500/10 text-green-500 border-green-500/20";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden text-white hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
        
        <div className="relative h-56 overflow-hidden">
          <img 
            src={issue.image} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
            alt={issue.type}
          />
          <Badge className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md border-white/10">
            {issue.confidence}% Confidence
          </Badge>
        </div>

        <div className="relative z-20 p-6 space-y-4 -mt-10">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-bold text-xl capitalize text-white drop-shadow-md">
              {issue.type} Report
            </h2>
            <Badge variant="outline" className={`${getPriorityColor(issue.priority)} flex items-center gap-1.5 px-3 py-1`}>
              <AlertCircle className="w-3.5 h-3.5" />
              {issue.priority}
            </Badge>
          </div>

          <div className="space-y-3">
            <p className="text-zinc-300 text-sm leading-relaxed line-clamp-2">
              {issue.aiSummary}
            </p>

            <div className="flex items-center gap-2 text-sm text-zinc-400 bg-white/5 rounded-xl p-3 border border-white/5">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="truncate">{issue.location}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
