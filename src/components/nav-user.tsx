import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";
import { useLogout } from "@/lib/auth";
import { useAuthStore } from "@/stores/auth-store";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useSidebar } from "@/hooks/use-sidebar";
import { IconLogout, IconSettings } from "@tabler/icons-react";

export function NavUser() {
  const { user } = useAuthStore();
  const logout = useLogout();
  const { state } = useSidebar();
  useEffect(() => {
    console.log("user", user);
  }, [user]);
  return (
    user && (
      <SidebarMenu>
        <div className="flex-col ">
          <div>
            <SidebarMenuButton className="px-2" asChild>
              <Link to="/setttings">
                <IconSettings size="20" /> {state === "expanded" && "Settings"}
              </Link>
            </SidebarMenuButton>
          </div>
          <div className="w-full">
            <SidebarMenuButton className="px-2" onClick={logout}>
              <IconLogout />
              {state === "expanded" && "Logout"}
            </SidebarMenuButton>
          </div>
        </div>
      </SidebarMenu>
    )
  );
}
