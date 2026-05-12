"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Trash2,
  Construction,
  Globe,
  FileClock,
  Sparkles
} from "lucide-react";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Public Feed",
    url: "/feed",
    icon: Globe,
  },
  {
    title: "Issue Tracking",
    url: "/tracking/demo",
    icon: FileClock,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-white/5 bg-black/40 backdrop-blur-2xl text-white">
      <SidebarContent>
        <div className="p-8 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent tracking-tight">
              CivicBridge
            </h1>
          </div>
          <p className="text-xs text-zinc-500 font-medium pl-1">AI Monitoring Platform</p>
        </div>

        <SidebarGroup className="px-4 mt-4">
          <SidebarGroupLabel className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 px-4">
            Main Menu
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1.5">
              {items.map((item) => {
                const isActive = pathname === item.url || (item.url !== "/" && pathname?.startsWith(item.url));
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.url}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? "bg-white/10 text-white font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <item.icon className={`w-5 h-5 ${isActive ? "text-blue-400" : "text-zinc-500"}`} />
                        <span className="text-[15px]">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
