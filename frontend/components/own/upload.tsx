"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, Image as ImageIcon, MapPin, AlignLeft } from "lucide-react";

export default function UploadBox({ onAnalyze }: any) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleImage = (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);

      setTimeout(() => {
        onAnalyze(url);
      }, 2000);
    }
  };

  const UploadArea = ({ type }: { type: string }) => (
    <div className="space-y-6 mt-8">
      <div 
        className={`relative group border-2 border-dashed rounded-3xl p-8 text-center transition-all duration-300 ${
          isDragging ? "border-blue-500 bg-blue-500/10" : "border-white/10 hover:border-white/30 bg-white/5"
        }`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const file = e.dataTransfer.files?.[0];
          if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
            setTimeout(() => onAnalyze(url), 2000);
          }
        }}
      >
        <Input 
          type="file" 
          onChange={handleImage} 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        
        <AnimatePresence mode="wait">
          {preview ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative h-64 w-full rounded-2xl overflow-hidden"
            >
              <img src={preview} className="w-full h-full object-cover" alt="Preview" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-medium flex items-center gap-2">
                  <UploadCloud className="w-5 h-5" /> Change Image
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center justify-center h-64 space-y-4"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                <ImageIcon className="w-10 h-10 text-zinc-400 group-hover:text-blue-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-white">Upload {type} Photo</h3>
                <p className="text-sm text-zinc-400">Drag and drop or click to browse</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <AlignLeft className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500" />
          <Textarea 
            placeholder={`Describe the ${type} issue...`} 
            className="pl-12 min-h-[100px] bg-white/5 border-white/10 focus:border-blue-500/50 rounded-2xl resize-none"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
          <Input 
            placeholder="Enter location manually" 
            className="pl-12 h-12 bg-white/5 border-white/10 focus:border-blue-500/50 rounded-xl"
          />
        </div>
      </div>
    </div>
  );

  return (
    <Card className="bg-white/5 backdrop-blur-3xl border border-white/10 p-2 sm:p-8 rounded-[2.5rem] shadow-2xl text-white">
      <Tabs defaultValue="garbage" className="w-full">
        <TabsList className="grid grid-cols-2 bg-black/50 p-1.5 rounded-2xl h-auto">
          <TabsTrigger 
            value="garbage" 
            className="rounded-xl py-3 text-base text-zinc-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
          >
            Garbage
          </TabsTrigger>
          <TabsTrigger 
            value="pothole" 
            className="rounded-xl py-3 text-base text-zinc-400 data-[state=active]:bg-orange-600 data-[state=active]:text-white transition-all"
          >
            Pothole
          </TabsTrigger>
        </TabsList>

        <TabsContent value="garbage">
          <UploadArea type="garbage" />
        </TabsContent>

        <TabsContent value="pothole">
          <UploadArea type="pothole" />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
