import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IconBellRinging } from "@tabler/icons-react";
import { X } from "lucide-react";

export function NotificationsDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <IconBellRinging />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="relative">
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>See your recent activities in here</DrawerDescription>

            <div className="absolute top-5 right-5">
              <DrawerClose asChild>
                <X className="h-5 w-5 cursor-pointer" />
              </DrawerClose>
            </div>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">No notifications yet</div>
          </div>
          <DrawerFooter></DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
