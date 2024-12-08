"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Download, Filter } from "lucide-react";
import { DateRangePicker } from "@/components/date-range-picker";
import { UserProfileMenu } from "@/components/user-profile-menu";
import { TimeTrackerModal } from "@/components/time-tracker-modal";

const mockUser = {
  name: "Abdul Rehman",
  email: "abdul@example.com",
  avatar: "",
};

export function DashboardHeader() {
  const [isTimeTrackerOpen, setIsTimeTrackerOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("35:15:23");

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Clock className="h-8 w-8 text-primary" />
            Welcome to TimePio
          </h1>
          <p className="text-muted-foreground">
            Track your team's time and boost productivity
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline"
            className="gap-2"
            onClick={() => setIsTimeTrackerOpen(true)}
          >
            <Clock className="h-4 w-4" />
            {currentTime}
          </Button>
          
          <UserProfileMenu user={mockUser} />
        </div>
      </div>
      
      <div className="flex items-center gap-2 flex-wrap">
        <DateRangePicker />
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      <TimeTrackerModal 
        isOpen={isTimeTrackerOpen}
        onClose={() => setIsTimeTrackerOpen(false)}
        currentTime={currentTime}
      />
    </div>
  );
}