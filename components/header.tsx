"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { UserProfileMenu } from "@/components/user-profile-menu";
import { TimeTrackerButton } from "@/components/time-tracker-button";
import { useIsMobile } from "@/hooks/use-mobile";

const mockUser = {
  name: "denis",
  email: "denis",
  avatar: "",
};

export function Header() {
  const isMobile = useIsMobile();

  return (
    <div className="h-14 border-b bg-background flex items-center justify-between px-4 md:px-6">
      {!isMobile && (
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">TimePio</span>
        </div>
      )}
      
      <div className="flex items-center gap-4 ml-auto">
        <TimeTrackerButton />
        <div className="h-8 w-[1px] bg-border hidden md:block" />
        <UserProfileMenu user={mockUser} />
      </div>
    </div>
  );
}