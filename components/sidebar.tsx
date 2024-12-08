"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Clock,
  Calendar,
  Users,
  Settings,
  BarChart2,
  Building2,
  LogOut,
  ChevronRight,
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
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

interface MenuItem {
  title: string;
  icon: React.ComponentType;
  href: string;
  external?: boolean;
}

interface SettingsMenuItem extends MenuItem {
  subItems?: MenuItem[];
}

const mainMenuItems: MenuItem[] = [
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

const settingsMenuItems: SettingsMenuItem[] = [
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

const bottomMenuItems: MenuItem[] = [
  {
    title: "Shop",
    icon: Store,
    href: "/shop",
  },
  {
    title: "Support",
    icon: HelpCircle,
    href: "https://support.timepio.com/",
    external: true,
  },
  {
    title: "Guide",
    icon: BookOpen,
    href: "https://docs.timepio.com/guide",
    external: true,
  },
];

const MenuIcon = ({ Icon }: { Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) => {
  return <Icon className="h-4 w-4" />;
};

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  const SidebarContent = () => (
    <div className="flex h-screen flex-col">
      <div className="flex h-14 items-center border-b px-4">
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}
        {(!isCollapsed || isMobile) && (
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Clock className="h-6 w-6 text-primary" />
            <span className="text-lg">TimePio</span>
          </Link>
        )}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-2 py-4">
          {mainMenuItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                pathname === item.href && "bg-secondary",
                isCollapsed && !isMobile && "px-2"
              )}
              asChild
            >
              <Link href={item.href}>
                <MenuIcon Icon={item.icon} />
                {(!isCollapsed || isMobile) && <span>{item.title}</span>}
              </Link>
            </Button>
          ))}

          {(!isCollapsed || isMobile) && settingsMenuItems.map((item) => (
            <Collapsible
              key={item.href}
              open={isSettingsOpen}
              onOpenChange={setIsSettingsOpen}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                >
                  <div className="flex items-center gap-2">
                    <MenuIcon Icon={item.icon} />
                    <span>{item.title}</span>
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isSettingsOpen && "rotate-90"
                    )}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 px-4 py-2">
                {item.subItems?.map((subItem) => (
                  <Button
                    key={subItem.href}
                    variant={pathname === subItem.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-2",
                      pathname === subItem.href && "bg-secondary"
                    )}
                    asChild
                  >
                    <Link href={subItem.href}>
                      <MenuIcon Icon={subItem.icon} />
                      <span>{subItem.title}</span>
                    </Link>
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        {(!isCollapsed || isMobile) && bottomMenuItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            className="w-full justify-start gap-2"
            asChild
          >
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <MenuIcon Icon={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Button>
        ))}
        <div className="flex items-center justify-between pt-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-2 left-2 z-50 md:hidden"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetContent side="left" className="p-0 w-80">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <div
      className={cn(
        "hidden md:flex h-screen flex-col border-r bg-card transition-all duration-300",
        isCollapsed ? "w-[80px]" : "w-[280px]"
      )}
    >
      <SidebarContent />
    </div>
  );
}