import { createFileRoute, Link, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth-store";
import { NotificationsDrawer } from "@/components/ui/shared/notificatios-drawer";
import { useTasks } from "@/queries/fetch-tasks";
import { useLeads } from "@/queries/fetch-leads";
import { useCurentUser } from "@/queries/fetch-current-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
});

function RouteComponent() {
  const { token } = useAuthStore();
  const navigator = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigator({ to: "/login" });
      return;
    }
  }, [token, navigator]);
  useCurentUser();
  useLeads();
  useTasks();
  const { user } = useAuthStore();
  return (
    <div>
      {" "}
      <ThemeProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
                <p className="capitalize">{location.pathname.slice(1)}</p>
              </div>
              <div className="flex gap-3 ml-auto px-4">
                <NotificationsDrawer />
                <ModeToggle />
                <Link to="/profile">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.profile_image} />
                    <AvatarFallback className="capitalize">
                      {user?.first_name && user?.last_name
                        ? `${user.first_name[0]}${user.last_name[0]}`
                        : "Nu"}
                    </AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <Outlet />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}
