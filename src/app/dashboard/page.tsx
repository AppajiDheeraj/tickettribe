"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { DashboardNav } from "@/modules/dashboard/ui/components/dashboard-navbar";
import { HomeView } from "@/modules/home/ui/views/home-view";

export default function CombinedPage() {
  return (
    <SidebarProvider>
      <DashboardSidebar />

      <main className="flex flex-col min-h-screen w-screen bg-muted">
        <DashboardNav />
        <HomeView />
      </main>
    </SidebarProvider>
  );
}
