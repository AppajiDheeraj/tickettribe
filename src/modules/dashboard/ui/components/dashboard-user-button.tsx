"use client";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { GeneratedAvatar } from "@/components/generated-avtar";
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

/* -----------------------------------------
   🔥 FRONTEND-ONLY DUMMY USER
------------------------------------------ */
const dummyUser = {
  name: "John Doe",
  email: "john@example.com",
  image: "", // leave blank to use generated avatar
};

export const DashboardUserButton = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const user = dummyUser;

  const onLogout = () => {
    console.log("Logged out");
    router.push("/sign-in");
  };

  /* -----------------------------------------
     AVATAR BLOCK (shared in desktop + mobile)
  ------------------------------------------ */
  const AvatarBlock = user.image ? (
    <Avatar className="size-9 mr-3">
      <AvatarImage src={user.image} />
    </Avatar>
  ) : (
    <GeneratedAvatar
      seed={user.name}
      variant="initials"
      className="size-9 mr-3"
    />
  );

  /* -----------------------------------------
     📱 MOBILE VERSION (DRAWER)
  ------------------------------------------ */
  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
          {AvatarBlock}

          <div className="flex flex-col gap-0.5 text-left flex-1 min-w-0">
            <p className="text-sm truncate">{user.name}</p>
            <p className="text-xs text-muted-foreground truncate">
              {user.email}
            </p>
          </div>

          <ChevronDownIcon className="size-4" />
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{user.name}</DrawerTitle>
            <DrawerDescription>{user.email}</DrawerDescription>
          </DrawerHeader>

          <div className="px-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-between"
              onClick={() => console.log("Billing clicked")}
            >
              Billing
              <CreditCardIcon className="size-4 text-black" />
            </Button>

            <Button
              className="w-full mt-3 flex items-center justify-between"
              onClick={onLogout}
            >
              Logout
              <LogOutIcon className="size-4 text-white" />
            </Button>
          </div>

          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    );
  }

  /* -----------------------------------------
     🖥️ DESKTOP VERSION (DROPDOWN)
  ------------------------------------------ */
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden gap-2">
        {AvatarBlock}

        <div className="flex flex-col gap-0.5 text-left flex-1 min-w-0">
          <p className="text-sm truncate">{user.name}</p>
          <p className="text-xs text-muted-foreground truncate">
            {user.email}
          </p>
        </div>

        <ChevronDownIcon className="size-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" side="right" className="w-72 p-2 m-2">
        <div className="flex flex-col gap-1">
          <span className="font-medium truncate">{user.name}</span>
          <span className="text-sm text-muted-foreground truncate">
            {user.email}
          </span>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer flex items-center justify-between"
          onClick={() => console.log("Billing clicked")}
        >
          Billing
          <CreditCardIcon className="size-4" />
        </DropdownMenuItem>

        <DropdownMenuItem
          className="cursor-pointer flex items-center justify-between"
          onClick={onLogout}
        >
          Logout
          <LogOutIcon className="size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
