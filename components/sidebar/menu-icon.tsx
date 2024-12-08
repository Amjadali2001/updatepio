// "use client";

// import { LucideIcon } from "lucide-react";

// interface MenuIconProps {
//   Icon: LucideIcon;
// }

// export function MenuIcon({ Icon }: MenuIconProps) {
//   return <Icon className="h-4 w-4" />;
// }

"use client";

import { LucideIcon, LucideProps } from "lucide-react";

interface MenuIconProps {
  Icon: React.ComponentType<LucideProps>; // Correct type for Lucide Icons
}

export function MenuIcon({ Icon }: MenuIconProps) {
  return <Icon className="h-4 w-4" />; // Render the icon with styling
}
