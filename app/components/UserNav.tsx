'use client';

import { AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { signOut, useSession } from "next-auth/react";

export default function UserNav() {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage src={session?.user?.image || "https://wsqbsllguxycivjpzaol.supabase.co/storage/v1/object/public/user%20image/pikapic.jpg"} />
            <AvatarFallback className="rounded-sm">{session?.user?.name?.charAt(0) || "A"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-59" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-none">
              {session?.user?.name || "Anonymous"}
            </p>
            <p className="text-xs text-muted-foreground">{session?.user?.email || "No email"}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className="text-sm px-2 py-2 font-semibold">Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}