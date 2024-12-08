"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Laptop2, Smartphone, Search, Filter, Plus, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const devices = [
  {
    id: 1,
    name: "John's Laptop",
    type: "Desktop",
    user: "John Doe",
    lastActive: "2024-03-01 09:30",
    status: "Online",
    os: "Windows 11",
    ip: "192.168.1.100"
  },
  {
    id: 2,
    name: "Sarah's iPhone",
    type: "Mobile",
    user: "Sarah Smith",
    lastActive: "2024-03-01 10:15",
    status: "Online",
    os: "iOS 17",
    ip: "192.168.1.101"
  },
  {
    id: 3,
    name: "Meeting Room PC",
    type: "Desktop",
    user: "Office Admin",
    lastActive: "2024-02-29 15:45",
    status: "Offline",
    os: "Windows 10",
    ip: "192.168.1.102"
  }
];

const statusColors = {
  "Online": "bg-green-500/10 text-green-500",
  "Offline": "bg-gray-500/10 text-gray-500",
  "Suspended": "bg-red-500/10 text-red-500"
};

export default function DevicesPage() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h3 className="text-lg font-medium">Connected Devices</h3>
            <p className="text-sm text-muted-foreground">
              Manage devices connected to your organization
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Device
          </Button>
        </div>

        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search devices..."
              className="pl-8"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Device</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {device.type === "Desktop" ? (
                        <Laptop2 className="h-5 w-5 text-primary" />
                      ) : (
                        <Smartphone className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{device.name}</p>
                      <p className="text-sm text-muted-foreground">{device.os}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{device.user}</TableCell>
                <TableCell>{device.lastActive}</TableCell>
                <TableCell>
                  <Badge className={statusColors[device.status as keyof typeof statusColors]}>
                    {device.status}
                  </Badge>
                </TableCell>
                <TableCell>{device.ip}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Device</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Remove Device
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}