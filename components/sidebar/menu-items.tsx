"use client";

import {
  Clock,
  Calendar,
  Users,
  Settings,
  BarChart2,
  Building2,
  Briefcase,
  ClipboardEdit,
  LineChart,
  Store,
  HelpCircle,
  Laptop2,
  Network,
  Receipt,
  BookOpen,
  Building,
} from "lucide-react";

export interface MenuItem {
  title: string;
  icon: React.ComponentType;
  href: string;
  external?: boolean;
}

export interface SettingsMenuItem extends MenuItem {
  subItems?: MenuItem[];
}

export const mainMenuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: Clock,
    href: "/dashboard",
  },
  {
    title: "Employees",
    icon: Users,
    href: "/employees",
  },
  {
    title: "Customers",
    icon: Briefcase,
    href: "/customers",
  },
  {
    title: "Projects",
    icon: Building2,
    href: "/projects",
  },
  {
    title: "Correction",
    icon: ClipboardEdit,
    href: "/correction",
  },
  {
    title: "Analysis",
    icon: LineChart,
    href: "/analysis",
  },
  {
    title: "Calendar",
    icon: Calendar,
    href: "/calendar",
  },
  {
    title: "Work Plan",
    icon: BarChart2,
    href: "/workplan",
  },
];

export const settingsMenuItems: SettingsMenuItem[] = [
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    subItems: [
      { title: "Company", href: "/company", icon: Building },
      { title: "Role Templates", href: "/settings/role-templates", icon: Users },
      { title: "Devices", href: "/devices", icon: Laptop2 },
      { title: "Port", href: "/port", icon: Network },
      { title: "Invoice", href: "/settings/invoice", icon: Receipt },
    ],
  },
];

export const bottomMenuItems: MenuItem[] = [
  {
    title: "Shop",
    icon: Store,
    href: "/shop",
  },
  {
    title: "Support",
    icon: HelpCircle,
    href: "/support",
  },
  {
    title: "Guide",
    icon: BookOpen,
    href: "/guide",
  },
];