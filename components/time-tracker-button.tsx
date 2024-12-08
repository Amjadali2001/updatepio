"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, History } from "lucide-react";
import { TimeTrackerModal } from "./time-tracker-modal";

export function TimeTrackerButton() {
  const [isTimeTrackerOpen, setIsTimeTrackerOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("35:18");

  return (
    <>
      <Button 
        variant="ghost" 
        className="h-9 gap-2 bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-600"
        onClick={() => setIsTimeTrackerOpen(true)}
      >
        <Clock className="h-4 w-4" />
        {currentTime}
        <History className="h-4 w-4" />
      </Button>

      <TimeTrackerModal
        isOpen={isTimeTrackerOpen}
        onClose={() => setIsTimeTrackerOpen(false)}
        currentTime={currentTime}
      />
    </>
  );
}