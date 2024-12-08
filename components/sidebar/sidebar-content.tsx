"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { Clock, LogOut, Menu, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { MenuIcon } from "./menu-icon";
import { mainMenuItems, settingsMenuItems, bottomMenuItems } from "./menu-items";
import { Icon } from "@radix-ui/react-select";

interface SidebarContentProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (value: boolean) => void;
  isMobile: boolean;
  onMobileClose?: () => void;
}

export function SidebarContent({
  isCollapsed,
  setIsCollapsed,
  isSettingsOpen,
  setIsSettingsOpen,
  isMobile,
  onMobileClose,
}: SidebarContentProps) {
  const pathname = usePathname();

  return (
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
        {isMobile && onMobileClose && (
          <Button
            variant="ghost"
            className="ml-auto px-3"
            onClick={onMobileClose}
          >
            Close
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
              <Icon className="h-4 w-4" />
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
                  <Icon className="h-4 w-4" />
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
            <Link href={item.href}>
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
}