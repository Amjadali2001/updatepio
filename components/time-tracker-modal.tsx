"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QRCode } from "@/components/qr-code";
import { Clock, MapPin, Coffee, Briefcase, Truck, Building2 } from "lucide-react";

interface TimeTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTime: string;
}

export function TimeTrackerModal({ isOpen, onClose, currentTime }: TimeTrackerModalProps) {
  const [view, setView] = useState<"tracker" | "qr">("tracker");
  
  const timeEntryTypes = [
    { icon: Clock, label: "Working time", status: "active" },
    { icon: Coffee, label: "Break" },
    { icon: Briefcase, label: "Project" },
    { icon: Truck, label: "Travel time" },
    { icon: Building2, label: "Business trip" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] p-0">
        <Tabs value={view} onValueChange={(v) => setView(v as "tracker" | "qr")} className="w-full">
          <TabsList className="w-full rounded-none">
            <TabsTrigger value="tracker" className="flex-1">Time Tracker</TabsTrigger>
            <TabsTrigger value="qr" className="flex-1">QR Code</TabsTrigger>
          </TabsList>
          
          {view === "tracker" ? (
            <div className="p-6 space-y-6">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{currentTime}</div>
                    <div className="text-sm text-muted-foreground">Total time</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MapPin className="h-4 w-4" />
                  Select location
                </Button>
              </div>

              <div className="space-y-2">
                {timeEntryTypes.map((type) => (
                  <Button
                    key={type.label}
                    variant={type.status === "active" ? "default" : "outline"}
                    className="w-full justify-start gap-2"
                  >
                    <type.icon className="h-4 w-4" />
                    {type.label}
                    {type.status === "active" && (
                      <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
                        active
                      </span>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <QRCode />
          )}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}