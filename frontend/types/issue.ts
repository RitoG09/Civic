export type Issue = {
  id: string;
  type: "garbage" | "pothole";
  image: string;
  description: string;
  location: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  confidence: number;
  aiSummary: string;
  createdAt: string;
};
