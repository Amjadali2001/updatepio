"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, User, Calendar, MessageSquare, Lock, LogOut, Globe } from "lucide-react";

interface UserProfileMenuProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const languages = [
  { name: "English", code: "en" },
  { name: "German", code: "Gr" },
  { name: "Deutsch", code: "de" },
  { name: "Français", code: "fr" },
  { name: "Español", code: "es" },
  { name: "Italiano", code: "it" },
];

export function UserProfileMenu({ user }: UserProfileMenuProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-accent rounded-full p-2">
        <Avatar>
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="text-left hidden md:block">
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem>
          <User className="w-4 h-4 mr-2" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Calendar className="w-4 h-4 mr-2" />
          My absences
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Clock className="w-4 h-4 mr-2" />
          My times
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquare className="w-4 h-4 mr-2" />
          Messages
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Lock className="w-4 h-4 mr-2" />
          Password
        </DropdownMenuItem>
        
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Globe className="w-4 h-4 mr-2" />
            Language
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {languages.map((lang) => (
              <DropdownMenuItem key={lang.code}>
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}