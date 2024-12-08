"use client";

import { LucideIcon } from "lucide-react";

interface MenuIconProps {
  Icon: LucideIcon;
}

export function MenuIcon({ Icon }: MenuIconProps) {
  return <Icon className="h-4 w-4" />;
}