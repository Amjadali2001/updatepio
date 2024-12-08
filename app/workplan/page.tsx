"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Users, Plus, Filter, Search } from "lucide-react";

const workPlans = [
  {
    id: 1,
    name: "Morning Shift",
    schedule: "08:00 - 16:00",
    employees: [
      {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=70",
      },
      {
        name: "Sarah Smith",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=70",
      }
    ],
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    status: "Active",
    department: "Development"
  },
  {
    id: 2,
    name: "Evening Shift",
    schedule: "16:00 - 00:00",
    employees: [
      {
        name: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&q=70",
      }
    ],
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    status: "Active",
    department: "Support"
  },
  {
    id: 3,
    name: "Weekend Shift",
    schedule: "10:00 - 18:00",
    employees: [
      {
        name: "Emily Davis",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&q=70",
      }
    ],
    days: ["Sat", "Sun"],
    status: "Active",
    department: "Sales"
  }
];

export default function WorkPlanPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Work Plan</h1>
          <p className="text-muted-foreground">
            Manage work schedules and shifts
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Work Plan
        </Button>
      </div>

      <Card className="p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex gap-2 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search work plans..."
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Working Days</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workPlans.map((plan) => (
              <TableRow key={plan.id}>
                <TableCell className="font-medium">{plan.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    {plan.schedule}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {plan.employees.map((employee, index) => (
                        <Avatar key={index} className="border-2 border-background w-8 h-8">
                          <AvatarImage src={employee.avatar} alt={employee.name} />
                          <AvatarFallback>{employee.name[0]}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {plan.employees.length} members
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div className="flex gap-1">
                      {plan.days.map((day) => (
                        <Badge key={day} variant="secondary" className="text-xs">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{plan.department}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {plan.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}