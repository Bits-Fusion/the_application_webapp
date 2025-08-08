import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { siteConfig } from "@/site.config";
import { useSidebar } from "@/hooks/use-sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div
          className={`flex py-5 px-3 gap-2 ${state === "expanded" ? "opacity-100" : "hidden"} transition-all duration-1000`}
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            {<siteConfig.logo className="size-4" />}
          </div>
          {state === "expanded" && siteConfig.name}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
