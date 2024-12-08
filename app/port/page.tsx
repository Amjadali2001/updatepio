"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Network, Plus, Download, Upload, Activity } from "lucide-react";

const portStats = [
  {
    title: "Active Connections",
    value: "128",
    change: "+12%",
    icon: Network,
  },
  {
    title: "Data Transfer",
    value: "1.2 TB",
    change: "+8%",
    icon: Activity,
  },
  {
    title: "Upload Speed",
    value: "850 Mbps",
    change: "+5%",
    icon: Upload,
  },
  {
    title: "Download Speed",
    value: "950 Mbps",
    change: "+3%",
    icon: Download,
  },
];

const ports = [
  {
    id: 1,
    name: "HTTP",
    number: 80,
    protocol: "TCP",
    status: "Open",
    service: "Web Server",
    lastChecked: "2 mins ago"
  },
  {
    id: 2,
    name: "HTTPS",
    number: 443,
    protocol: "TCP",
    status: "Open",
    service: "Secure Web",
    lastChecked: "2 mins ago"
  },
  {
    id: 3,
    name: "SSH",
    number: 22,
    protocol: "TCP",
    status: "Filtered",
    service: "Remote Access",
    lastChecked: "5 mins ago"
  },
  {
    id: 4,
    name: "FTP",
    number: 21,
    protocol: "TCP",
    status: "Closed",
    service: "File Transfer",
    lastChecked: "10 mins ago"
  }
];

export default function PortPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {portStats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span className="text-sm text-green-500">{stat.change}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-medium">Port Management</h3>
            <p className="text-sm text-muted-foreground">
              Monitor and configure network ports
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Port
          </Button>
        </div>

        <div className="grid gap-6">
          {ports.map((port) => (
            <div
              key={port.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Network className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{port.name}</h4>
                    <Badge variant="outline">Port {port.number}</Badge>
                    <Badge variant="secondary">{port.protocol}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{port.service}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Last checked {port.lastChecked}
                </div>
                <Badge
                  variant="outline"
                  className={
                    port.status === "Open"
                      ? "bg-green-50 text-green-700"
                      : port.status === "Filtered"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-red-50 text-red-700"
                  }
                >
                  {port.status}
                </Badge>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}