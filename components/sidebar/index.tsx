"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarContent } from "./sidebar-content";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-2 left-2 z-50 md:hidden"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetContent side="left" className="p-0 w-80">
            <SidebarContent
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              isSettingsOpen={isSettingsOpen}
              setIsSettingsOpen={setIsSettingsOpen}
              isMobile={true}
              onMobileClose={() => setIsMobileOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <div
      className={cn(
        "hidden md:flex h-screen flex-col border-r bg-card transition-all duration-300",
        isCollapsed ? "w-[80px]" : "w-[280px]"
      )}
    >
      <SidebarContent
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isSettingsOpen={isSettingsOpen}
        setIsSettingsOpen={setIsSettingsOpen}
        isMobile={false}
      />
    </div>
  );
}